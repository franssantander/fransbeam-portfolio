// A side view of the brain exactly as printed: black and white pixels, transparent around it.
export const BRAIN_PRINT_SRC = "/images/brain-print.png";

// How far the folds stand out against the brain's gentle dome, and how many dots the passing light may turn over.
const RELIEF = 3;
const DOME = 0.5;
const LIGHT_STRENGTH = 0.24;
// One trip of the light round the brain, in seconds.
const ORBIT_SECONDS = 12;

// A soft band of light keeps sliding across the brain from top left to bottom right, lifting the dots it passes and
// leaving them darker behind it: how long one band takes to pass, how wide light-to-dark is (as a share of the
// brain), and how many dots it turns over.
const SWEEP_SECONDS = 7;
const SWEEP_WAVELENGTH = 1;
const SWEEP_STRENGTH = 0.2;
const SWEEP_ANGLE = Math.PI / 6;

const WHITE = 0xffffffff;
const BLACK = 0xff000000;

// 8×8 ordered-dither ranks, built from the 2×2 matrix; they set the order dots turn over in.
const BAYER_8 = (() => {
  let matrix = [
    [0, 2],
    [3, 1],
  ];
  while (matrix.length < 8) {
    const size = matrix.length;
    matrix = Array.from({ length: size * 2 }, (_, y) =>
      Array.from(
        { length: size * 2 },
        (_, x) =>
          4 * matrix[y % size][x % size] +
          [0, 2, 3, 1][(y >= size ? 2 : 0) + (x >= size ? 1 : 0)],
      ),
    );
  }
  return matrix.map((row) => row.map((value) => (value + 0.5) / 64));
})();

export type PrintPixels = {
  cols: number;
  rows: number;
  index: Uint32Array;
  sweep: Float32Array;
  ax: Float32Array;
  ay: Float32Array;
  margin: Float32Array;
  frame: ImageData;
  buffer: Uint32Array;
  source: HTMLCanvasElement;
  enlarged: HTMLCanvasElement;
};

/** Blurs `values` in place with a box of `radius`, along rows then columns. */
function boxBlur(
  values: Float32Array,
  cols: number,
  rows: number,
  radius: number,
) {
  const line = new Float32Array(Math.max(cols, rows));
  const pass = (
    count: number,
    length: number,
    at: (lineIndex: number, step: number) => number,
  ) => {
    for (let lineIndex = 0; lineIndex < count; lineIndex += 1) {
      for (let step = 0; step < length; step += 1)
        line[step] = values[at(lineIndex, step)];
      for (let step = 0; step < length; step += 1) {
        let sum = 0;
        for (let offset = -radius; offset <= radius; offset += 1)
          sum += line[Math.min(length - 1, Math.max(0, step + offset))];
        values[at(lineIndex, step)] = sum / (radius * 2 + 1);
      }
    }
  };
  pass(rows, cols, (row, col) => row * cols + col);
  pass(cols, rows, (col, row) => row * cols + col);
}

/**
 * Reads the printed brain once and readies each pixel to be relit: the surface it sits on (the dome of the brain,
 * ridged by its folds) and how far the light must lean on it before it turns over. With no light nothing turns
 * over, so the print shows exactly as drawn.
 */
export function printPixels(image: HTMLImageElement): PrintPixels {
  const cols = image.naturalWidth;
  const rows = image.naturalHeight;
  const source = document.createElement("canvas");
  source.width = cols;
  source.height = rows;
  const context = source.getContext("2d", { willReadFrequently: true })!;
  context.drawImage(image, 0, 0);
  const { data } = context.getImageData(0, 0, cols, rows);

  const total = cols * rows;
  const ink = new Float32Array(total);
  const weight = new Float32Array(total);
  let left = cols;
  let right = 0;
  let top = rows;
  let bottom = 0;
  for (let pixel = 0; pixel < total; pixel += 1) {
    if (data[pixel * 4 + 3] < 128) continue;
    weight[pixel] = 1;
    ink[pixel] = data[pixel * 4] > 128 ? 1 : 0;
    const col = pixel % cols;
    const row = (pixel - col) / cols;
    left = Math.min(left, col);
    right = Math.max(right, col);
    top = Math.min(top, row);
    bottom = Math.max(bottom, row);
  }

  // The print's tone: its own dots, spread out over the brain only.
  const tone = Float32Array.from(ink);
  const spread = Float32Array.from(weight);
  for (const values of [tone, spread]) {
    boxBlur(values, cols, rows, 3);
    boxBlur(values, cols, rows, 3);
  }
  const toneAt = (col: number, row: number) => {
    const pixel =
      Math.min(rows - 1, Math.max(0, row)) * cols +
      Math.min(cols - 1, Math.max(0, col));
    return spread[pixel] > 0 ? tone[pixel] / spread[pixel] : 0;
  };

  const centerX = (left + right) / 2;
  const centerY = (top + bottom) / 2;
  const radiusX = Math.max(1, (right - left) / 2);
  const radiusY = Math.max(1, (bottom - top) / 2);
  const kept: number[] = [];
  for (let pixel = 0; pixel < total; pixel += 1) {
    if (!weight[pixel]) continue;
    const col = pixel % cols;
    const row = (pixel - col) / cols;
    const u = (col - centerX) / radiusX;
    const v = (row - centerY) / radiusY;
    const dome = Math.sqrt(Math.max(0.05, 1 - u * u - v * v));
    // Tone is height, so the surface leans away from the brighter side.
    const nx =
      DOME * u - RELIEF * (toneAt(col + 2, row) - toneAt(col - 2, row));
    const ny =
      DOME * v - RELIEF * (toneAt(col, row + 2) - toneAt(col, row - 2));
    const length = Math.hypot(nx, ny, dome);

    const level = toneAt(col, row);
    // Ranked per 2×2 block, so dots turn over at the print's own dot size rather than as single specks.
    const rank = BAYER_8[(row >> 1) & 7][(col >> 1) & 7];
    // White dots turn black once the light leans away past their rank, and black dots turn white the other way.
    const margin = ink[pixel] ? (rank - 1) * level : rank * (1 - level);
    // Where the pixel sits along the sweep, as a phase, so a frame only has to shift it.
    const across = (col - left) / Math.max(1, right - left);
    const down = (row - top) / Math.max(1, bottom - top);
    const along = across * Math.cos(SWEEP_ANGLE) + down * Math.sin(SWEEP_ANGLE);
    const sweep = (along / SWEEP_WAVELENGTH) * Math.PI * 2;
    kept.push(
      pixel,
      sweep,
      (LIGHT_STRENGTH * nx) / length,
      (LIGHT_STRENGTH * ny) / length,
      margin,
    );
  }

  const count = kept.length / 5;
  const field = (offset: number) =>
    Float32Array.from({ length: count }, (_, at) => kept[at * 5 + offset]);
  const frame = context.createImageData(cols, rows);
  return {
    cols,
    rows,
    index: Uint32Array.from(field(0)),
    sweep: field(1),
    ax: field(2),
    ay: field(3),
    margin: field(4),
    frame,
    buffer: new Uint32Array(frame.data.buffer),
    source,
    enlarged: document.createElement("canvas"),
  };
}

/**
 * Prints the brain at `seconds`, under the circling light and the sliding band of light, or exactly as drawn when
 * `seconds` is null. Both move at one steady pace and repeat smoothly, so the loop has no seam. The print is scaled to
 * fill the canvas: first enlarged by a whole number, so every square stays the same size, and only the rest is smoothed.
 */
export function drawPrintFrame(
  context: CanvasRenderingContext2D,
  pixels: PrintPixels,
  seconds: number | null,
) {
  const { index, sweep, ax, ay, margin, buffer } = pixels;
  const orbit = ((seconds ?? 0) / ORBIT_SECONDS) * Math.PI * 2;
  const lightX = seconds === null ? 0 : Math.cos(orbit);
  const lightY = seconds === null ? 0 : Math.sin(orbit);
  const shift = ((seconds ?? 0) / SWEEP_SECONDS) * Math.PI * 2;
  const band = seconds === null ? 0 : SWEEP_STRENGTH;
  for (let at = 0; at < index.length; at += 1) {
    const lean =
      ax[at] * lightX + ay[at] * lightY + band * Math.sin(sweep[at] - shift);
    buffer[index[at]] = lean > margin[at] ? WHITE : BLACK;
  }
  pixels.source.getContext("2d")!.putImageData(pixels.frame, 0, 0);

  const { width, height } = context.canvas;
  const factor = Math.max(1, Math.ceil(width / pixels.cols - 0.01));
  let image = pixels.source;
  if (factor > 1) {
    image = pixels.enlarged;
    if (image.width !== pixels.cols * factor) {
      image.width = pixels.cols * factor;
      image.height = pixels.rows * factor;
    }
    const enlarged = image.getContext("2d")!;
    enlarged.imageSmoothingEnabled = false;
    enlarged.clearRect(0, 0, image.width, image.height);
    enlarged.drawImage(pixels.source, 0, 0, image.width, image.height);
  }

  context.clearRect(0, 0, width, height);
  context.imageSmoothingEnabled = image.width !== width;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, width, height);
}

// A faint grid of square dots, in CSS pixels: how far apart they sit, how big and how strong they are at rest, and how
// much bigger and stronger they get at the heart of the glow.
const SPACING = 22;
const DOT = 1.5;
const GROW = 1;
const REST_ALPHA = 0.1;
const LIT_ALPHA = 0.5;

// How far the glow reaches, and the most it draws a dot in toward its centre.
const RADIUS = 96;
const PULL = 6;

// How quickly the glow catches up with the pointer, and how long it takes to light up and to die away.
const LAG_SECONDS = 0.12;
const FADE_IN_SECONDS = 0.15;
const FADE_OUT_SECONDS = 0.5;

// Across the cleared element's ellipse, where the grid starts to come back and where it is whole again.
const CLEAR_FROM = 0.9;
const CLEAR_TO = 1.35;

export type Point = { x: number; y: number };
export type Glow = Point & { strength: number };
export type Clearing = Point & { radiusX: number; radiusY: number };

export const NO_GLOW: Glow = { x: 0, y: 0, strength: 0 };

/**
 * Moves the glow on by `seconds`: it glides after `target` and lights up while there is one, and dies away where it
 * stands once there isn't. It starts out on the target rather than sliding in from where it last faded.
 */
export function followGlow(
  glow: Glow,
  target: Point | null,
  seconds: number,
): Glow {
  if (!target)
    return {
      ...glow,
      strength: Math.max(0, glow.strength - seconds / FADE_OUT_SECONDS),
    };
  const from = glow.strength ? glow : target;
  const ease = 1 - Math.exp(-seconds / LAG_SECONDS);
  const x = from.x + (target.x - from.x) * ease;
  const y = from.y + (target.y - from.y) * ease;
  const strength = Math.min(1, glow.strength + seconds / FADE_IN_SECONDS);
  // Close enough to call it there, so the glow settles and stops asking for frames.
  if (Math.hypot(target.x - x, target.y - y) < 0.25)
    return { ...target, strength };
  return { x, y, strength };
}

export function isGlowSettled(glow: Glow, target: Point | null) {
  if (!target) return glow.strength === 0;
  return glow.strength === 1 && glow.x === target.x && glow.y === target.y;
}

function clearedAt(
  x: number,
  y: number,
  { x: centerX, y: centerY, radiusX, radiusY }: Clearing,
) {
  const across = Math.hypot((x - centerX) / radiusX, (y - centerY) / radiusY);
  const t = Math.min(
    1,
    Math.max(0, (across - CLEAR_FROM) / (CLEAR_TO - CLEAR_FROM)),
  );
  return t * t * (3 - 2 * t);
}

/**
 * Draws the grid across the canvas under `glow`: dots near it grow, brighten and lean in toward its centre, most at
 * half its reach, so they never bunch up in the middle. Dots fade out around `clearing`. Everything is snapped to
 * whole device pixels, so the squares stay crisp.
 */
export function drawDotGrid(
  context: CanvasRenderingContext2D,
  {
    ratio,
    glow,
    clearing,
  }: { ratio: number; glow: Glow; clearing: Clearing | null },
) {
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#000";

  const cols = Math.floor(width / ratio / SPACING) + 1;
  const rows = Math.ceil(height / ratio / SPACING);
  const left = (width / ratio - (cols - 1) * SPACING) / 2;
  const top = SPACING / 2;
  const pixels = (value: number) => Math.round(value * ratio);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      let x = left + col * SPACING;
      let y = top + row * SPACING;
      const shown = clearing ? clearedAt(x, y, clearing) : 1;
      if (!shown) continue;

      let lit = 0;
      const dx = glow.x - x;
      const dy = glow.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (glow.strength && distance < RADIUS) {
        const reach = distance / RADIUS;
        lit = glow.strength * (1 - reach * reach) ** 2;
        if (distance) {
          const pull =
            (PULL * glow.strength * Math.sin(Math.PI * reach)) / distance;
          x += dx * pull;
          y += dy * pull;
        }
      }

      const size = Math.max(1, pixels(DOT + GROW * lit));
      context.globalAlpha = (REST_ALPHA + LIT_ALPHA * lit) * shown;
      context.fillRect(
        pixels(x) - (size >> 1),
        pixels(y) - (size >> 1),
        size,
        size,
      );
    }
  }
  context.globalAlpha = 1;
}

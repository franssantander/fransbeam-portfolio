export type LeaderPoint = { x: number; y: number };
export type LeaderLine = { from: LeaderPoint; to: LeaderPoint };

// How round the line's turn is, in CSS pixels
const CORNER_RADIUS = 18;

/** A line that runs across from the label, then turns, on a rounded corner, onto its point on the brain. */
export function leaderPath(from: LeaderPoint, to: LeaderPoint) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const radius = Math.min(CORNER_RADIUS, Math.abs(dx), Math.abs(dy));
  if (radius < 1) return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  // Turning right then down, or left then up, is clockwise
  const sweep = sx * sy > 0 ? 1 : 0;
  return `M ${from.x} ${from.y} H ${to.x - sx * radius} A ${radius} ${radius} 0 0 ${sweep} ${to.x} ${from.y + sy * radius} V ${to.y}`;
}

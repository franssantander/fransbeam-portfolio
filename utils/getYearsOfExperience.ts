export function getYearsOfExperience() {
  const start = new Date(2023, 9, 1);
  const now = new Date();
  const years =
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return years < 2
    ? `${Math.floor(years * 12)} Months`
    : `${Math.floor(years)} Years`;
}

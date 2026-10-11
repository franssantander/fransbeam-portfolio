// "Oct 2026"
export function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

// "OCT 7, 2026"
export function formatFullDate(date: string) {
  return new Date(date)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    })
    .toUpperCase();
}

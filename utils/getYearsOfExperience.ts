const CAREER_START = new Date(2023, 9, 1);

function yearsSinceStart() {
  return (
    (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
}

/** Whole years of professional experience, e.g. 3. */
export function getYearsOfExperienceCount() {
  return Math.floor(yearsSinceStart());
}

export function getYearsOfExperience() {
  const years = yearsSinceStart();
  return years < 2
    ? `${Math.floor(years * 12)} Months`
    : `${Math.floor(years)} Years`;
}

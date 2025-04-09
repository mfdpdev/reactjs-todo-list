export const getSuffix = (date) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const exceptions = [11, 12, 13];
  const lastDigit = date % 10;

  if (exceptions.includes(date % 100)) {
    return "th";
  }

  return suffixes[lastDigit] || "th";
};

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

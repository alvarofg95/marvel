const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export const dateParser = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (isNaN(day) || isNaN(year)) {
    return null;
  }

  return `${day} ${MONTHS[month]}, ${year}`;
};

export const getImgUrl = (image) => {
  const { path, extension } = image;
  return `${path}.${extension}`;
};

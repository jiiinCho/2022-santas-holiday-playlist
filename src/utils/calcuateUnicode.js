const getIncrements = (unicode) => {
  const step = 400;
  return Math.round((unicode - 33) / step) === 0
    ? 1
    : Math.round((unicode - 33) / step);
};
const getCharacter = (increments, unicode) => {
  const unicodeIndicator = Math.min(increments, unicode);
  return String.fromCharCode(unicodeIndicator);
};

export const calculateUnicode = { getIncrements, getCharacter };

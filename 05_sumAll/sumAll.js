const sumAll = function (min, max) {
  // Check for errors
  if (
    !Number.isInteger(min) ||
    !Number.isInteger(max) ||
    min < 0 ||
    max < 0
  ) {
    return "ERROR";
  }
  // Sort the numbers if they are in the wrong order
  if (min > max) {
    [min, max] = [max, min];
  }
  // Sum
  let total = 0;
  for (i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  matrix = matrix.flat(1);
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === '^^') {
      count += 1;
    }
    return count
  }
};

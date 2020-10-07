const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0;
  array = array.flat(1) 
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '^^') {
      count++
    }
  } return count
};

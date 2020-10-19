const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let a = [];
    if (!(Array.isArray(arr) && (typeof arr === 'object'))) {
      return 0;
    }
    if (arr === []) {
      return 1
    }

    let filter = arr.filter(el => Array.isArray(el) && (typeof el === 'object'));
    if (filter.length === 0) {
      return 1;
    }

    for (let i = 0; i < filter.length; i++) {
      a.push(this.calculateDepth(filter[i]) + 1);
    }
    return Math.max(...a);
  }}
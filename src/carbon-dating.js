const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
    let log = 0.693;
    let reaction = log / HALF_LIFE_PERIOD;
    let date = Math.ceil((MODERN_ACTIVITY / parseFloat(sampleActivity)) / reaction);
    return date;
  } else {
    return false;
  }
};

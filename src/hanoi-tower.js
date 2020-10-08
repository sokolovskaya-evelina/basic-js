const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {
    turns: 0,
    seconds: 0
  }
  answer.turns = 2 ** disksNumber - 1;
  let turnsAtSec = turnsSpeed  / 3600;
  let oneTurnTime = 1 / turnsAtSec;
  answer.seconds = Math.floor(answer.turns * oneTurnTime);
  return answer;
};

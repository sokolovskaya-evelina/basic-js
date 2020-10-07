const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;

    let nameOfTeam = [];
  
    for (let member of members) {
      if (typeof member !== "string") continue;
  
      for (let letter of member) {
        if (letter == " ") continue;
        nameOfTeam.push(letter.toUpperCase());
        break;
      }
    }
  
    return nameOfTeam.sort().join("");
};

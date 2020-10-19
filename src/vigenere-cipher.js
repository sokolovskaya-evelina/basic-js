const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    if (type) {
      this.type = 'direct';
    } else {
      this.type = 'reverse';
    }
   }
 
   encrypt(enc, cipher) {
 
   if (!enc || !cipher) throw Error("Invalid argument"); // валидация аргумента
 
     let table = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         str = enc.toUpperCase(),
         code = cipher.toUpperCase(),
         j = 0,
         result = "";
 
   let ind = (phrase, index) => table.indexOf(phrase[index]); // вынес для читаемости
 
 
     for (let i = 0; i < str.length; i++) {
       if (ind(str, i) >= 0) {
       (ind(code, j) + ind(str, i) >= 26) ?
         result += table[ind(code, j) + ind(str, i) - 26] :
         result += table[ind(code, j) + ind(str, i)];
         j >= code.length - 1 ? j = 0 : j++; // тут если кодовое слово кончилось, обнуляем индекс
       } else 	{result += str[i]};
     } 
 
   return this.type === 'reverse'? result.split('').reverse().join(''): result;
   }    
 
   decrypt(enc, cipher) {
 
   if (!enc || !cipher) throw Error("Invalid argument");
 
     let table = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         str = enc.toUpperCase(),
         code = cipher.toUpperCase(),
         j = 0,
         result = "";
 
   let ind = (phrase, index) => table.indexOf(phrase[index]); // вынес для читаемости
     
     for (let i = 0; i < str.length; i++) {
       if (table.indexOf(str[i]) >= 0) {
         (ind(str, i) - ind(code, j)) >= 0 ? 
       result += table[ind(str, i) - ind(code, j)] :
           result += table[ind(str, i)  - ind(code, j) + 26];
            j >= code.length - 1 ? j = 0: j++;
       } else {result += str[i]};
     } 
 
   return this.type === 'reverse'? result.split('').reverse().join(''): result;
   }
 }
 
 module.exports = VigenereCipheringMachine;
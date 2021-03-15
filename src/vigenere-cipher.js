const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let vignerKey = key.toUpperCase();

    vignerKey = vignerKey.repeat(Math.ceil(message.length/key.length)).split("");

    let code = ""
    for (let i = 0; i<message.length; i++)
    {
      if(64 < message[i].charCodeAt(0) && message[i].charCodeAt(0) < 91)
      {
        code += String.fromCharCode(((message[i].charCodeAt(0)+vignerKey[0].charCodeAt(0)) % 26) + 65);
        vignerKey.shift();
      }
      else{
        code += message[i];
      }
    }
    return this.direction ? code : code.split("").reverse().join("");

  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    let vignerKey = key.toUpperCase();

    vignerKey = vignerKey.repeat(Math.ceil(message.length / key.length)).split("");

    let code = ""
    for (let i = 0; i<message.length; i++)
    {
      if(64 < message[i].charCodeAt(0) && message[i].charCodeAt(0) < 91)
      {
        code += String.fromCharCode(((message[i].charCodeAt(0)-vignerKey[0].charCodeAt(0) +26) % 26) + 65);
        vignerKey.shift();
      }
      else{
        code += message[i];
      }
    }

   return this.direction ? code : code.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;


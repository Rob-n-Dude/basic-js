const CustomError = require("../extensions/custom-error");

const chainMaker = {

  "link" : [],

  getLength() {
    const chainLength = this.link.filter( (x) => x !== undefined);
      return chainLength.length;
    },

  addLink(value) {
    this.link.push(value);
    return this;
  },
  removeLink(position) {
    const clearChain = this.link.filter((x) => x !== undefined);

    this.link = clearChain;
 
    if(!Number.isInteger(position) || position <= 0 || position > this.getLength())
    {
      this.link = [];
      throw new Error();
    }
    
      this.link[position-1] = undefined;
      return this;
    
  },
  reverseChain() {
    this.link = this.link.reverse();
    return this;
  },
  finishChain() {
    const resChain = this.link.filter( (x) => x !== undefined);
   
   let result = ""
   resChain.forEach( function(x)  {
     result += "( " + x + " )~~"
   })
   this.link = [];
   return result.slice(0,-2);
  }
};

module.exports = chainMaker;

// const CustomError = require("../extensions/custom-error");

// const chainMaker = {
//   "link": [],

//   getLength() {
//     const chainLength = this.link.filter(function(x) {
//       return x !== undefined;
//     });
//     return chainLength.length;
//   },
//   addLink(value) {
//     this.link.push(value);
//     return this;
//   },
//   removeLink(position) {
//     const clearChain = this.link.filter(function(x) {
//       return x !== undefined;
//     });
//     this.link = clearChain;

//     if(!Number.isInteger(position) ||
//       position <= 0 ||
//       position > this.link.length) {
//         this.link = [];
//         throw new Error();
//     }
//     this.link[position - 1] = undefined;
//     return this;
//   },
//   reverseChain() {
//     this.link = this.link.reverse();
//     return this;
//   },
//   finishChain() {
//     const clearChain = this.link.filter(function(x) {
//       return x !== undefined;
//     });

//     let result = "";
//     clearChain.forEach(function (element) {
//       result += "( " + element + " )~~";
//     });
//     chainMaker.link = [];
//     return result.slice(0,-2);
//   }
// };

// module.exports = chainMaker;
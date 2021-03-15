const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arg) {

    if(!Array.isArray(arg))
    {
      return 1;
    }
    let depth = 1;
    arg.forEach(element => {
      if(Array.isArray(element)) {
        
        const depthLevel = this.calculateDepth(element) + 1;
        if(depth < depthLevel) {depth = depthLevel;}
      }
    });
    return depth;
  
  }
};
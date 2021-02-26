const CustomError = require("../extensions/custom-error");

module.exports = function countCats(field) {
  
    target = "^^";
    counter = 0
    for( let line of field)
    {
      for( let pos of line)
      {
        if (pos == target)
        {
          counter++;
        }
      }
    }
    return counter;  
};


const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options){
  if(typeof(str)!= "string")
  {
    str = String(str);
  }
  if(!options.separator)
  {
    options.separator = "+";
  }
  let sep = ""

  if(options.hasOwnProperty("addition")) {
    
    if(typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if(!options.additionSeparator)
    {
    options.additionSeparator = `'|'`;
    }
    for(let i = 0; i < options.additionRepeatTimes -1; i++)
    {
      sep += String(options.addition) + String(options.additionSeparator)
    }
    sep += String(options.addition)
  }
  else{
    sep = ""
  }
  let result = ""
  for (let j = 0; j < options.repeatTimes -1; j++)
  {
    result += str + sep + options.separator;
  }
  return result + str +sep


};
  
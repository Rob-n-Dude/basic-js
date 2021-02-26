const CustomError = require("../extensions/custom-error");

function isLetter(str)
{
    return str.toLowerCase() != str.toUpperCase()
}

module.exports = function createDreamTeam(members) {
  letters = []
  try{
    for(all of members){
      if(typeof(all)==="string" && isLetter(all.trim()[0])){
          letters.push(all.trim()[0].toUpperCase())
      }   
  
    }
  }
  catch(e){
    return false
  }
  
  if (letters.length == 0){
    return false
  }
  letters.sort()
  result = ""
  for(lett of letters){
      result += lett
  }
  return result
}



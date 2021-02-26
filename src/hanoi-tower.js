const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = 2 ** disksNumber - 1;
  time = Math.floor(turns*3600/turnsSpeed)
  return  {"turns": turns, "seconds": time}
};

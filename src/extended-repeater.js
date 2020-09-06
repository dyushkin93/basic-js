module.exports = function repeater(str, options) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  let repeatedStr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    repeatedStr.push(String(str));
    if (!(options.addition === undefined) && options.additionRepeatTimes > 0) {
      repeatedStr.push(repeater(
        options.addition,
        {
          separator: options.additionSeparator,
          repeatTimes: options.additionRepeatTimes,
        }
      ))
    }
    if (i != options.repeatTimes - 1) {
      repeatedStr.push(options.separator);
    }
  }
  return repeatedStr.join("");
};
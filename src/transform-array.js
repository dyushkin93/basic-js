module.exports = function transform(arr) {
  let transformed = [];
  let i = 0;
  if (Array.isArray(arr)) {
    while (i < arr.length) {
    if (arr[i] == "--discard-next") {
      if (/^--.*?prev$/.test(arr[i + 2])) {
        i += 3;
        } else i+=2;
      } else if (arr[i] == "--discard-prev") {
        i > 0 ? (transformed.pop(), i++) : i++;
      } else if (arr[i] == "--double-next") {
        i < arr.length-1 ? (transformed.push(arr[i+1]), i++) : i++;
      } else if (arr[i]=="--double-prev") {
        i > 0 ? (transformed.push(arr[i - 1]), i++) : i++;
      } else {
        transformed.push(arr[i]);
        i++;
      }
    }
  } else {
    throw new Error("Is not an array");
  }
  return transformed;
}
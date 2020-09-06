module.exports = class DepthCalculator {
  calculateDepth(arr) {
  if (Array.isArray(arr)) {
    if (arr.length != 0) {
     let depth = 1 + Math.max(...arr.map(elem => {
     return  this.calculateDepth(elem);
     }))
     return depth;       
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}
}
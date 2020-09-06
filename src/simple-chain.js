const chainMaker = {
  arr: [],
  getLength() {
    return arr.length
  },
  addLink(value) {
      this.arr.push("\x28 "+value+" \x29");
    return this;
  },
  removeLink(position) {
    if (position>0 && position<=this.arr.length) {
      this.arr.splice(position-1, 1);
    } else {
      this.arr=[];
      throw new Error("Wrong value");
    }
    return this;
  },
  reverseChain() {
    this.arr=this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain=this.arr.join("~~");
    this.arr=[];
    return chain;
  }
};

module.exports = chainMaker;

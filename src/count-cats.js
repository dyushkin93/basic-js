module.exports = function countCats(arr) {
  let cats=arr.reduce((cats, elem) => {
    cats+=elem.reduce((cats, elem) => {
     elem==="^^" ? cats+=1 : cats+=0;
     return cats;
    }, 0);
    return cats;
  }, 0);
  return cats;
};

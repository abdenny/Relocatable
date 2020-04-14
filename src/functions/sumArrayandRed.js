const add = (a, b) => a + b;

let sumArrayandRed = (array1, array2) => {
  let redArray1 = array1.reduce(add);
  let redArray2 = array2.reduce(add);
  if (redArray1 > redArray2) {
    return 100 - (redArray2 / redArray1) * 100;
  } else if (redArray1 < redArray2) {
    return 100 - (redArray1 / redArray2) * 100;
  }
};

export default sumArrayandRed;

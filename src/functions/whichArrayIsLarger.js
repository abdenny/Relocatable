const add = (a, b) => a + b;

let whichArrayIsLarger = (array1, array2) => {
  let redArray1 = array1.reduce(add);
  let redArray2 = array2.reduce(add);
  if (redArray1 > redArray2) {
    return `City1`;
  } else if (redArray1 < redArray2) {
    return `City2`;
  }
};

export default whichArrayIsLarger;

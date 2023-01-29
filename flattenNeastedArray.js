const nestedArray = [1, [2,[[3], [4, 5], 6], 7, [8]], [9, 10]];

const flattenNeastedArray1 = array => {
  const flattedArray = array.flat();
  return JSON.stringify(array) === JSON.stringify(flattedArray) ? array : flattenNeastedArray1(flattedArray);
}

const flattenNeastedArray2 = array => {
  return array.reduce((accumelator, item) => {
    if(Array.isArray(item)) {
      accumelator = [...accumelator, ...flattenNeastedArray2(item)];
    } else {
      accumelator.push(item);
    }
    return accumelator;
  }, []);
}

console.log(flattenNeastedArray1(nestedArray));
console.log(flattenNeastedArray2(nestedArray));

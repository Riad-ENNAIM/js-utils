const arr1 = [
  { id: 'a', a: 1, b: 2, c: 3 },
  { id: 'b', a: 1, c: 2, d: 3 },
  { id: 'c', b: 1, e: 2, f: 3, g: 10 }
];


const arr2 = [
  { id: 'e', a: 1, b: 2, c: 3 },
  { id: 'c', a: 1, f: 2, g: 3 },
  { id: 'd', a: 1, b: 2, c: 3 }
];

const arr3 = [
  { id: 'b', a: 1, c: 2, d: 3, m: 4 },
  { id: 'a', a: 1, b: 2, d: 3, },
  { id: 'e', a: 1, b: 2, c: 3 },
  { id: 'c', a: 1, f: 2, g: 3 },
  { id: 'd', a: 1, b: 2, c: 3 }
];

const sumElementsById = (...arrays) => {
    const items = arrays.flat();
    const result = items.reduce((accumulator, item) => {
        const { id, ...otherProps } = item;
        const sameItemIndex = accumulator.findIndex(elem => elem.id === id);

        if(sameItemIndex >= 0) {
            Object.entries(otherProps).forEach(([key, val]) => {
                if(accumulator[sameItemIndex][key]) {
                    accumulator[sameItemIndex][key] += val;
                } else {
                    accumulator[sameItemIndex][key] = val;
                }
            })
        } else {
            accumulator.push(item);
        }

        return accumulator;
    }, []);
    return result;
}

console.log(sumElementsById(arr1, arr2, arr3));
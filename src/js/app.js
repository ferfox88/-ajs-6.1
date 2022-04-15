export default function orderByProps(obj, order) {
  const objSort = [];
  const objSortAlphabet = [];
  for (const prop in obj) {
    if (order.includes(prop)) {
      objSort.push({
        key: prop,
        value: obj[prop],
      });
    } else {
      objSortAlphabet.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  objSortAlphabet.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  return [...objSort, ...objSortAlphabet];
}

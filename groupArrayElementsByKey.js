const data = [
  { id: 1, name: 'item 1', category: 'category 1' },
  { id: 2, name: 'item 2', category: 'category 2' },
  { id: 3, name: 'item 3', category: 'category 1' }
];

const groupItemsByCategory = items => items.reduce((accumulator, item) => {
  const { category } = item
  accumulator[category] = accumulator[category] ?? [];
  accumulator[category].push(item);
  return accumulator;
}, {});

console.log(groupItemsByCategory(data));

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

// input: arr
// output: number
const getTotalRevenue = arr =>
  arr.reduce((acc, el) => acc + el.amount, 0);

console.log(getTotalRevenue(dayTransactions));

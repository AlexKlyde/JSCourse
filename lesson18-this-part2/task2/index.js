const wallet = {
  transactions: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transactions);
    // return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
    // return Math.min.apply(null, this.transactions);
  }
};
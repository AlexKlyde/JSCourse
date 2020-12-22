class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toString(36).substring(7);
    this.dateCreated = new Date();
  }

  isConfirmed = false;

  dateConfirmed;

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }

    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Sell' || this.type === 'Buy') {
      return true;
    }

    return false;
  }
}

const order1 = new Order('2000', 'kyiv', 'Buy');
console.log(order1.checkPrice());
console.log(order1.isValidType());
console.log(order1);



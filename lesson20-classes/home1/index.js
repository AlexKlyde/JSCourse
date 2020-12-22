/* Order класс
Представьте что вы разрабатываете ресурс, где люди могут делать заказы в интернет магазине. Для такого ресурса нужно будет создать сущность (класс) Order, которая будет отображать и хранить данные о заказах. Создайте этот класс и добавьте в него следующее.

Основные требования:
Создать класс Order c полями
id - string - генерируется при создании экземполяра класса (можно использовать Math.random() приведенный к строке)
price - number - цена заказа
dateCreated - Date - время создания заказа
isConfirmed - bool - заказ подтвержден / не подтвержден
dateConfirmed - Date - дата подтверждения заказа
city - string - место проведения заказа
type - string - тип заказа
Конструктор должен принимать нужные параметры - price, city, type. ID проставляется рандомный. По-умолчаний заказ не подтвержден
Создать методы ниже
checkPrice() - должен возвращать true если сумма закака больше 1000 и false в другом случае
confirmOrder() - должен проставлять ордер в статус confirmed = true (если заказ не был подтвержден раньше) и дату конфирма ставить в текущую
isValidType() - type поле может принимать только два значения - Buy, Sell - метод возвращает true если это требование выполняется и false если нет */

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



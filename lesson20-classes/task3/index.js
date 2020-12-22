/* Защищенные поля
Создайте кошелек с возможностью пополнения и снятия средств

Основные требования:
Класс должен экспортироваться под именем Wallet
Баланс кошелька по умолчанию равен 0
Метод getBalance должен вернуть текущий баланс
Метод deposit должен увеличивать баланс указанную сумму
Метод withdraw должен уменьшать баланс указанную сумму
При попытке снять больше средств, чем есть на счету - вывести сообщение No enough funds в консоль прекратить выполнение */

class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log('No enough funds');
      return;
    }

    this._balance -= amount
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(100);
wallet1.withdraw(50);
console.log(wallet1.getBalance());
wallet1.withdraw(100);



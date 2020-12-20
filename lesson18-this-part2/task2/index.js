'use strict';
/*Заимствование метода
Опишите объект кошелька, который будет содержать информацию о транзакциях,
и возможность возвращать максимальную и минимальную транзакцию

Основные требования:
Экспортируйте из файла объект с именем wallet
Объект wallet должен хранить массив транзакций в свойстве transactions
Метод getMax должен вернуть значение максимальной транзакции
Метод getMin должен вернуть значение минимальной транзакции
*/

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
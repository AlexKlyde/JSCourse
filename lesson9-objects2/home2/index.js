/*Посчитать баланс по всем транзакциям
Задан массив транзакций. Нужно посчитать итоговую сумму транзакций

Основные требования:
Ф-ция должна называться getTotalRevenue и находиться в файле index.js
Пример работы
            const dayTransactions = [
                { userId: 22, amount: 60, operation: 'sell' },
                { userId: 22, amount: 160, operation: 'buy' },
                { userId: 44, amount: 90, operation: 'sell' },
            ];
            const result = getTotalBalance(dayTransactions);
            // result = 310
        
getTotalRevenue принимает массив транзакций в первом аргументе
getTotalRevenue должна вернуть число - сумму всех транзакций
*/

// const dayTransactions = [
//                 { userId: 22, amount: 60, operation: 'sell' },
//                 { userId: 22, amount: 160, operation: 'buy' },
//                 { userId: 44, amount: 90, operation: 'sell' },
//             ];

// input: arr
// output: number
const getTotalRevenue = arr => {
  return arr.reduce((a, b) => a + b.amount, 0);
}

// console.log(getTotalRevenue(dayTransactions));
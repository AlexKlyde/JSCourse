/*Logger
Программист Петя во время написания своей программы столкнулся с необходимость отслеживать ее поведение. Для этого ему нужно выводить в консоль разные типы сообщений - warn (предупреждение об ошибке), error (ошибка), log (обычное сообщение), а так же получать историю этих сообщений

Помогите Пете и напишите ф-цию, которая будет создавать логгеры - они должны выполнять его задачу

Основные требования:
Из файла index.js должна экспортироваться ф-ция с именем createLogger
createLogger должна вернуть логгер (объект) с методами:
warn - принимает сообщение в виде строки и записывает его в память с типом warn
error - принимает сообщение в виде строки и записывает его в память с типом error
log - принимает сообщение в виде строки и записывает его в память с типом log
Пямять в этой задаче - это массив логеров (объектов)
Сообщения в памяти храним в формате { message: [сохраненное сообщение], dateTime: [время регистрации сообщения (используем new Date() - текущее время)], type: [тип записи] } где type - 'warn', 'error' или 'log'
Метод getRecords - принимает строку (тип сообщения) 'warn', 'error' или 'log' и возвращает сообщения этого типа в формате { message: [сохраненное сообщение], dateTime: [время регистрации сообщения], type: [тип записи] }. То есть этот метод должен работать с массивом логеров
getRecords возвращает все сообщения (всех типов), если аргумент не передан
getRecords должен вернуть сообщения в виде массива, отсортированному по времени по убыванию (самые новые сообщения в массиве идут первыми)
getRecords должен возвращать пустые массивы, если сообщений соответствующего типа не поступало
Логгеры, созданные с помощью createLogger должны быть независимы друг от друга (у каждого своя память)
Пример работы:
        const logger = createLogger();
        logger.log('User logged in');
        logger.warn('User try to restricted page');
        logger.log('User logged out');
        logger.error('Unexpected error on the site');
        logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
        logger.getRecords('log'); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
        logger.getRecords('error'); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
        logger.getRecords('warn'); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
        
Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте */
// input: 
// output: Object

// algo
// 1. create an empty array
// 2. create a method that gets a sring(message)
//  2.1 create a new object with props and save the message in it
//  2.2 save an object in array
// ...
// 3. create a method that gets a string(type)
//  3.1 if argument is empty(undefined) return an array(all messages)
//  3.2 else, filter the message by type and return it.
//  3.3
// 4. return an object of methods.
// input: 
// output: Object

// algo
// 1. create an empty array
// 2. create a method that gets a sring(message)
//  2.1 create a new object with props and save the message in it
//  2.2 save an object in array
// ...
// 3. create a method that gets a string(type)
//  3.1 if argument is empty(undefined) return an array(all messages)
//  3.2 else, filter the message by type.
//  3.3 sort messages by date and return it.
// 4. return an object of methods.
const createLogger = () => {
  const loggers = [];

  const warn = message => {
    loggers.push({
      message,
      dateTime: new Date(),
      type: 'warn',
    });
  }

 const error = message => {
    loggers.push({
      message,
      dateTime: new Date(),
      type: 'error',
    });
  }

  const log = message => {
    loggers.push({
      message,
      dateTime: new Date(),
      type: 'log',
    });
  }
  
  const getRecords = type => {
    loggers.sort((a, b) => b.dateTime - a.dateTime)

    if (type === undefined) {
      return loggers
    }
    
    return loggers.filter(el => el.type === type);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};


const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
// console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
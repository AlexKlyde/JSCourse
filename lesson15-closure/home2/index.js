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
    const sortedLogs = loggers.sort((a, b) => b.dateTime - a.dateTime);
    return type ? sortedLogs : sortedLogs.filter(el => el.type === type);
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
'use strict';

let message = 'Just learn it!';

const sendMessage = name => {
  const sender = 'Gromecode';

  console.log(`${name}, ${message}. You ${sender}`)
} 

const setMessage = text => message = text;
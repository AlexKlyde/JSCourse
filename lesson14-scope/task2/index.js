'use strict';

const createMessenger = () => {

  function sendMessage(name) {
    const sender = 'Gromecode';

    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
  };
}
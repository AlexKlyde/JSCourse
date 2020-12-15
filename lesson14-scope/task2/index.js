'use strict';

function createMessenger() {
  let message;
  let sender;
  function sendMessage(name) {
    console.log(`${name}, ${message}. Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
const Messenger = createMessenger();
Messenger.setMessage('Just do it');
Messenger.setSender('Alex Klyde');
Messenger.sendMessage('Ann');


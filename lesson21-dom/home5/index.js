const setButton = buttonText => {
  const button = document.createElement('button');
  document.body.append(button);
  button.textContent = buttonText;
};

setButton('Hello world');
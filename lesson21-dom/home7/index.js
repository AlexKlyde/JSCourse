const createButton = buttonText => {
  const button = document.createElement('button');
  document.body.append(button);
  button.textContent = buttonText;
};

createButton('Send email');

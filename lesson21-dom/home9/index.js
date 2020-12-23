const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.querySelector('input[type=text]');

  const input = document.createElement('input');

  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  formElem.prepend(input);
  inputElem.setAttribute('type', 'password');
};


finishForm();
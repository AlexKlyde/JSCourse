const setTitle = text => {
  const elem = document.querySelector('.title');
  elem.textContent = text;
};

setTitle('Hello world');
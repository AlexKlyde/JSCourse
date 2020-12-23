const inputEl = document.querySelector('.text-input');
const handler = event => console.log(event.target.value);
inputEl.addEventListener('change', handler);

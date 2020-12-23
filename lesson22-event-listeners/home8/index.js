const checkboxEl = document.querySelector('.task-status');
const handler = event => console.log(event.target.checked);
checkboxEl.addEventListener('change', handler);

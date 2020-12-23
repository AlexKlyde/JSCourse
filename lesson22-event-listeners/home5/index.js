const btnEl = document.querySelector('.single-use-btn');
const handler = () => {
  console.log('clicked');
  btnEl.removeEventListener('click', handler);
}

btnEl.addEventListener('click', handler);

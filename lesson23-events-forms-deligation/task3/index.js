const img = document.querySelector('img');

document.addEventListener('DOMContentLoaded', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('load', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('beforeunload', e => {
  e.returnValue = '';
});

window.addEventListener('unload', () => {
  console.log('Page left');
});


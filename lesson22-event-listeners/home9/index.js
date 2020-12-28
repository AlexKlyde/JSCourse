// Event deligation

const btns = document.querySelector('.pagination');

// Option 1
/* const handleClick = event => {
  const isButton = event.target.classList.contains('pagination__page');
  if (!isButton) {
    return;
  }
  
  console.log(event.target.dataset.pageNumber);
} */

// Option 2
const handleClick = event => {
  if (event.target.className === 'pagination__page') {
    console.log(event.target.dataset.pageNumber);
  }
};

btns.addEventListener('click', handleClick);

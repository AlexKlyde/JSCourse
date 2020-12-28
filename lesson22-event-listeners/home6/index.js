// Event deligation

const btns = document.querySelector('body');

// Option 1
/* const handleClick = event => {
  const isButton = event.target.classList.contains('.btn');
  if (!isButton) {
    return;
  }
  
  console.log(event.target.textContent);;
} */

// Option 2
const handleClick = event => {
  if (event.target.className === 'btn') {
    console.log(event.target.textContent);
  }
};

btns.addEventListener('click', handleClick);

const btns = document.querySelectorAll('.btn');

const handleClick = event =>
  console.log(event.target.textContent);

btns.forEach(item => item.addEventListener('click', handleClick));

const squaredNumbers = () => {
  const elements = document.querySelectorAll('.number');

  return Array.from(elements).map(el => {
    const squaredVal = el.dataset.number ** 2;
    el.setAttribute('data-squared-number', squaredVal);
  });
}

console.log(squaredNumbers());
export const getTitle = () => {
  const element = document.querySelector('.title');
  return element.textContent;
};

// console.log(getTitle());

export const getDescription = () => {
  const element = document.querySelector('.about');
  return element.innerText;
};

// console.log(getDescription());

export const getPlans = () => {
  const element = document.querySelector('.plans');
  return element.innerHTML;
};

// console.log(getPlans());

export const getGoal = () => {
  const element = document.querySelector('.goal');
  return element.outerHTML;
};

// console.log(getGoal());
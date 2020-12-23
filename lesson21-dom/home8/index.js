const finishList = () => {
  const elem = document.querySelector('.list');
  const specialElem = document.querySelector('.special');

  const firstItem = document.createElement('li');
  const forthItem = document.createElement('li');
  const sixthItem = document.createElement('li');
  const eightItem = document.createElement('li');

  firstItem.textContent = '1';
  forthItem.textContent = '4';
  sixthItem.textContent = '6';
  eightItem.textContent = '8';
  
  elem.prepend(firstItem);
  specialElem.before(forthItem);
  specialElem.after(sixthItem);
  elem.append(eightItem);
};

finishList();

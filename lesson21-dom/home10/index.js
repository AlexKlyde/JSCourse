const manageClasses = () => {
  const elem1 = document.querySelector('.one');
  const elem2 = document.querySelector('.two');
  const elem3 = document.querySelector('.three');
  const elem4 = document.querySelector('.four');

  elem1.classList.add('selected');
  elem2.classList.remove('selected');
  elem3.classList.toggle('three_done');
  if (elem4.classList.contains('some-class')) {
    elem4.classList.add('another-class');
  }
};

manageClasses();

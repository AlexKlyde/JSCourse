const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderListItems = listItems => {
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done}) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderListItems(tasks);

// Add task algo:
// 1. add eventListener
// 2. create task object
// 3. add to the task array
// 4. rerender
const createBtn = document.querySelector('.create-task-btn');
const inputEl = document.querySelector('.task-input');

const addTask = () => {
  if (!inputEl.value) {
    alert('You must write something!');
    return;
  }

  const task = {
    text: inputEl.value,
    done: false,
  };

  tasks.push(task);
  listElem.innerHTML = '';

  renderListItems(tasks);
};

createBtn.addEventListener('click', addTask);

// Algo
// 1. add eventListener to List 
// 2. find clicked checkbox that constains class .list__item-checkbox
// 3. if checkbox was clicked, toggle class list__item_done from parent element

const changeTask = event => {
  if (event.target.classList.contains('list__item-checkbox')) {
    const closestElem = event.target.closest('.list__item');
    closestElem.classList.toggle('list__item_done');
  }
};

listElem.addEventListener('click', changeTask);
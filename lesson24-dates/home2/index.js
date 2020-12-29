const tasks = [
  { text: 'Buy milk', done: false, createDate: new Date().toISOString()},
  { text: 'Pick up Tom from airport', done: false, createDate: new Date().toISOString()},
  { text: 'Visit party', done: false, createDate: new Date().toISOString()},
  { text: 'Visit doctor', done: true, createDate: new Date().toISOString()},
  { text: 'Buy meat', done: true, createDate: new Date().toISOString()},
];

const compareTasks = (a, b) => {
  if (a.done < b.done) {
    return -1;
  }

  if (a.done > b.done) {
    return 1;
  }

  return new Date(b.createDate) - new Date(a.createDate);
};

const ulElem = document.querySelector('.list');

const renderListItems = listItems => {
  const listItemsElems = listItems
    .sort(compareTasks)
    .map(({ text, done }, ind) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('data-id', ind);
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  ulElem.append(...listItemsElems);
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
    createDate: new Date().toISOString(),
  };

  tasks.push(task);
  ulElem.innerHTML = '';

  renderListItems(tasks);
};

createBtn.addEventListener('click', addTask);

// Algo
// 1. add eventListener to the List
// 2. find the element that contains class .list__item-checkbox
// 3. get an id of the target element
// 4. set up a value of the ckeckbox to the task;
// 5. update the list
// 6. render list items


const changeTask = event => {
  if (event.target.className === 'list__item-checkbox') {
    const { id } = event.target.dataset;
    tasks[id].done = event.target.checked;
    
    ulElem.innerHTML = '';
    renderListItems(tasks);
  }
};

ulElem.addEventListener('click', changeTask);



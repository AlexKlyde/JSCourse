const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json());

getTasksList().then(tasksList => console.log(tasksList));

/* getTaskById code here */

const getTaskById = taskId =>
  fetch(`${baseUrl}/${taskId}`)
    .then(response => response.json());
    



getTaskById('20').then(taskData => console.log(taskData));


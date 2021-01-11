const baseUrl = 'https://5ff9ad2b17386d0017b51ffd.mockapi.io/api/v1/users';

/* getUsersList code here */
const getUsersList = () =>
  fetch(baseUrl)
     .then(response => response.json());

/* getUserById code here */
const getUserById = userId =>
  fetch(`${baseUrl}/${userId}`)
    .then(response => response.json());

/* createUser code here */
const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

const createUser = user => 
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });

createUser(newUserData);

/* updateUser code here */
const updateUser = (userId, userData) => 
  fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

/* deleteUser code here */
const deleteUser = userId =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });

getUsersList().then(result => console.log(result));
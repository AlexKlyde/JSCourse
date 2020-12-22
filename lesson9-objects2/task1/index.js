const users = { 'John Doe': 19, Tom: 17, Bob: 18 };

/* const getAdults = usersObj => {
  // {'Tom': 17, 'John Doe': 19,} => [['Tom', 17], ['John Doe', 19]]
  const usersArray = Object.entries(usersObj);

  // [['Tom', 17], ['John Doe', 19]] => [['John doe', 19]]
  const filteredUsersArray = usersArray
    .filter(user => user[1] >= 18);
  
  // [['John doe', 19]] => ['john doe']
  const userNames = filteredUsersArray
    .map(user => user[0]);
  
  return userNames;
}
 */

const getAdults = usersObj =>
  Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

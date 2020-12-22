// bad
/* const withdraw = (clients, balances, client, amount) => {
  let res = -1;

  clients.forEach((el, ind) => {
    if (el === client && balances[ind] >= amount) {
     res = balances[ind] - amount;
    } 
  });

  return res;
} */

// good
// Example2
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  return balances[index] < amount ? -1 :
    balances[index] - amount;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87));

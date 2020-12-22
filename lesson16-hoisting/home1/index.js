// const createArrayOfFunctions = num => {
//   let arr = [];

//   if (typeof num === 'undefined') {
//     return arr;
//   } else if (isNaN(num)) {
//     return null;
//   }

//   for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//       return i;
//     }
//   }

//   return arr;
// }


const createArrayOfFunctions = num => { 
  if (typeof num === 'undefined') {
    return [];
  }

  if (isNaN(num)) {
    return null;
  }

  return Array(num).fill().map((el, ind) => el = () => ind)
}


console.log(createArrayOfFunctions());

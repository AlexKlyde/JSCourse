const nums = ['  a1.9 ', '16.4', 17, '1 dollar '];

// const cleanTransactionsList = arr => {
//     let cleaned = [];
    
//     arr.forEach(el => {
//         if (!/[a-zA-Z]/.test(el) ) {
//             cleaned.push('$' + parseFloat(el).toFixed(2));
//         }
//     });
//     return cleaned;
// }

const cleanTransactionsList = arr => 
  arr.filter(el => !/[a-zA-Z]/.test(el))
    .map(el => '$' + parseFloat(el).toFixed(2));
  
console.log(cleanTransactionsList(nums));
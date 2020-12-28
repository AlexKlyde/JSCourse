/* const concatProps = obj => {
    let arr = [];

    for (let key in obj) {
      // arr.push(obj[key]);
      arr = arr.concat(obj[key])
    }

    return arr;
} */

// example 2

const concatProps = obj => Object.values(obj)

console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
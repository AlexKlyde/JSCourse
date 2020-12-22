const arrOfNums = [1, 2, 3, 4, 5, 6];

const reverseArray = arr => {
    if(!Array.isArray(arr)) {
        return null;
    }
    return [...arr].reverse();
}

console.log(reverseArray(arrOfNums))
console.log(arrOfNums)


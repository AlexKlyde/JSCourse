const squareArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.map(num => num * num)
}

console.log(squareArray([2, 4, 5, 10]));


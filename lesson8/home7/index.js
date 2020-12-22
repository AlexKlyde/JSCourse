const getAdults = obj => {
    let adults = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
          adults[key] = obj[key];
        }
    }

    return adults;
}

console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));
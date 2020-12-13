const superRound = (num, round) => [
    Math.floor(num * round) / round, 
    Math.round(num * round),
    Math.ceil(num * round),
    Math.trunc(num * round),
    +num.toFixed()
];

console.log(superRound(12.234, 6));
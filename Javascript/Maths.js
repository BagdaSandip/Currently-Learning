const score = 400;
console.log(score);

const balance = new Number(15800);
console.log(balance);

//to know the length of a number.

console.log(balance.toString().length);

//to fix the precison value or add the decimal after the point.
console.log(balance.toFixed(2));
 
//to get the precison value means get the approximate value.
const otherNumber = 23.898
console.log(otherNumber.toPrecision(2));

//to give space between large number so it can be easily readble;
const hundreds = 1230000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math)

//to conver - into + but can not convert + into -.
console.log(Math.abs(-8));

// to get the round of values of any decimal numbers.
console.log(Math.round(5.4));

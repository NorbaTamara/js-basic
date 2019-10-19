// NUMBERS
// 1. Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
let binary = 0b10010;
let octal = 0o22;
let hexadecimal = 0x12; // all number are 18 in decimal

// 2. Implement function extractNumbers which will leave only numbers in passed string.
function extractNumbers (text) {
  return parseFloat(text);
};
console.log(extractNumbers('235.13px'));

// 3. Declare a variable with decimal value and convert to binary, octal and hexadecimal.
let initial = 483;
let inBinary = initial.toString(2);
console.log(inBinary);
let inOctal = initial.toString(8);
console.log(inOctal);
let inHexa = initial.toString(16);
console.log(inHexa);

// 4. use Math.random to generate random value from 0 to 100.
let randomizedVariable = Math.round(Math.random() * 100);
console.log(randomizedVar);

// ADDITIONAL
// 1. Make function which will take an array with numbers as a parameter and calculate average number and round to hundredths.
function avgArray(array) {
   let result = 0;
   for(let element of array){
     result += element;
   }
   return (result/array.length).toFixed(2);
};

console.log(avgArray([3,3,6]));

// 2. Generate array to pass to function above with values, and length generated by Math.random.

let randomArray = [];
let arrLength = Math.round(Math.random() * 100);
for ( let i = 0; i < arrLength; i++){
  randomArr.push(Math.random() * 100);
};
console.log(randomArr);
console.log(avgArr(randomArr));

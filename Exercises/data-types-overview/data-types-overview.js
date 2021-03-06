// DATA TYPES
// 1. Declare a variable on each type using two options: plain creation, creation with constructor.
// 2. Use operator typeof on each of them.
//number
const plainNumber = 10;
typeof plainNumber;
const constructorNumber = new Number(100);
typeof constructorNumber;
//string
const plainString = 'hi';
typeof plainString;
const constructorString = new String('hello');
typeof constructorString;
//boolean
const plainBoolean = true;
typeof plainBoolean;
const constructorBoolean = new Boolean(false);
typeof constructorBoolean;

//null
const variableNull = null;
typeof variableNull;
//undefined
const variableUndefined = undefined;
typeof variableUndefined;

//array
const plainArray = [1, 2, 3];
typeof plainArray;
const constructorArray = new Array('a', 'b', 'c');
typeof constructorArray;
//object
const plainObject = {a: 1, b: 2, c: 3};
typeof plainObject;
const constructorObj = new Object({a: 'a', b: 'b', c: 'c'});
typeof constructorObject;

// 3. Demonstrate object's references.
let originObject = {
    title: 'course',
    content: 'js',
};

let copiedObject = originObject; // objects are referenced to the same place in memory so changing of one will cause changing of other

copiedObject.level = 'basic';
console.log(originObject);
console.log(copiedObject); // the same content with originObj

let properlyCopiedObject = {...originObject}; //example how we can avoid duplicating
properlyCopiedObject.level = 'basic level';
console.log(originObject);
console.log(properlyCopiedObject); // properlyCopiedObject can be changed independently from origin

// 4. Demonstrate string's backticks features.
const title = 'Students';
const action = `${title} learn js `;
console.log(action);


//ADDITIONAL
// 1. Declare an array containing different data types.
let diffTypes = [false, 1, 2, 'three', 'four', 5, {six: 6}];

// 2. Iterate through it and collect amount of each data type to object.
const typesAmount = {};
for (let element of differentTypes){
    let type = typeof element;
    if (typesAmount[type] === undefined){
       typesAmount[type] = 1;
    } else {
        typesAmount[type]++;
    }
};
console.log(typesAmount);

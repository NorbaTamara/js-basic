// DATA TYPES
// 1. Declare a variable on each type using two options: plain creation, creation with constructor.
// 2. Use operator typeof on each of them.
//number
let plainNumber = 10;
typeof plainNumber;
let constructorNumber = new Number(100);
typeof constructorNumber;
//string
let plainString = 'hi';
typeof plainString;
let constructorString = new String('hello');
typeof constructorString;
//boolean
let plainBoolean = true;
typeof plainBoolean;
let constructorBoolean = new Boolean(false);
typeof constructorBoolean;

//null
let variableNull = null;
typeof variableNull;
//undefined
let variableUndefined = undefined;
typeof variableUndefined;

//array
let plainArray = [1, 2, 3];
typeof plainArray;
let constructorArray = new Array('a', 'b', 'c');
typeof constructorArray;
//object
let plainObject = {a: 1, b: 2, c: 3};
typeof plainObject;
let constructorObj = new Object({a: 'a', b: 'b', c: 'c'});
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
let title = 'Students';
let action = `${title} learn js `;
console.log(action);


//ADDITIONAL
// 1. Declare an array containing different data types.
let diffTypes = [false, 1, 2, 'three', 'four', 5, {six: 6}];

// 2. Iterate through it and collect amount of each data type to object.
let collectedTypes = {};
for (let i = 0; i < diffTypes.length; i++){
    let type = typeof diffTypes[i];
    collectedTypes[i] = type;
};
console.log(collectedTypes);

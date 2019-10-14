// DATA TYPES
// 1. Declare a variable on each type using two options: plain creation, creation with constructor.
// 2. Use operator typeof on each of them.
//number
let plainNum = 10;
typeof plainNum;
let constructorNum = new Number(100);
typeof constructorNum;
//string
let plainStr = 'hi';
typeof plainStr;
let constructorStr = new String ('hello');
typeof constructorStr;
//boolean
let plainBool = true;
typeof plainBool;
let constructorBool = new Boolean(false);
typeof constructorBool;

//null
let variableNull = null;
typeof variableNull;
//undefined
let variableUndefined = undefined;
typeof variableUndefined;

//array
let plainArr = [1, 2, 3];
typeof plainArr;
let constructorArr = new Array('a', 'b', 'c');
typeof constructorArr;
//object
let plainObj = {a: 1, b: 2, c: 3};
typeof plainObj;
let constructorObj = new Object({a: 'a', b: 'b', c: 'c'});
typeof constructorObj;

// 3. Demonstrate object's references.
let originObj = {
    title: 'course',
    content: 'js',
};

let copiedObj = originObj; // objects are referenced to the same place in memory so changing of one will cause changing of other

copiedObj.level = 'basic';
console.log(originObj);
console.log(copiedObj); // the same content with originObj

let properlyCopiedObj = {...originObj}; //example how we can avoid duplicating
properlyCopiedObj.level = 'basic level';
console.log(originObj);
console.log(properlyCopiedObj); // properlyCopiedObject can be changed independently from origin

// 4. Demonstrate string's backticks features.
let title = 'Students';
let action = `${title} learn js `;
console.log(action);


//ADDITIONAL
// 1. Declare an array containing different data types.
let diffTypes = [false, 1, 2, 'three', 'four', 5, {six: 6}];

// 2. Iterate through it and collect amount of each data type to object.
let collectedTypes = {};
for(let i = 0; i < diffTypes.length; i++){
    let type = typeof diffTypes[i];
    collectedTypes[i] = type;
};
console.log(collectedTypes);
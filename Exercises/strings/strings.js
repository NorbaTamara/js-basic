// STRINGS
// 1. Assign string with unicode to a variable.
let unicodeStr = 'Example of unicode symbol is \u00B9';
console.log(unicodeStr);

// 2. Declare a variable with string with escaped symbols.
let escapeSymb = '\u00A5';
console.log(escapeSymb);

// 3. Declare a variable which will contain name of your favourite animal.
// 4. Log a message My favourite animal is with dynamic variable from previous task.
let favorCat = 'Murchyk';
console.log(`My favourite animal is cat ${favorCat}`);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
let favorWriter = 'isaak asimov';
let properFavorWriter = favorWriter[0].toUpperCase() + 'saak ' + favorWriter[6].toUpperCase() + 'simov';
console.log(properFavorWriter);
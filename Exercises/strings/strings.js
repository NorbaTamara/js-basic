// STRINGS
// 1. Assign string with unicode to a variable.
let unicodeString = 'Example of unicode symbol is \u00B9';
console.log(unicodeString);

// 2. Declare a variable with string with escaped symbols.
let escapeSymbol = '\u00A5';
console.log(escapeSymbol);

// 3. Declare a variable which will contain name of your favourite animal.
// 4. Log a message My favourite animal is with dynamic variable from previous task.
let favoriteCat = 'Murchyk';
console.log(`My favourite animal is cat ${favoriteCat}`);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
let favoriteWriter = 'isaak asimov';
let properFavoriteWriter = favoriteWriter[0].toUpperCase() + 'saak ' + favoriteWriter[6].toUpperCase() + 'simov';
console.log(properFavoriteWriter);

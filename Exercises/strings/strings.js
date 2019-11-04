// STRINGS
// 1. Assign string with unicode to a variable.
const unicodeString = 'Example of unicode symbol is \u00B9';
console.log(unicodeString);

// 2. Declare a variable with string with escaped symbols.
const escapeSymbols = 'Hello,\nthis is text on new line\t and this is text with tabulation';
console.log(escapeSymbols);

// 3. Declare a variable which will contain name of your favourite animal.
// 4. Log a message My favourite animal is with dynamic variable from previous task.
const favoriteCat = 'Murchyk';
console.log(`My favourite animal is cat ${favoriteCat}`);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
const favoriteWriter = 'herbert wells';
const wordsDivisorIndex = favoriteWriter.indexOf(' ');
const properFavoriteWriter = `${favoriteWriter[0].toUpperCase()}${favoriteWriter.slice(1, favoriteWriter.indexOf(' '))} ${favoriteWriter[wordsDivisorIndex + 1].toUpperCase()}${favoriteWriter.substring((wordsDivisorIndex + 2), favoriteWriter.length)}`;
console.log(properFavoriteWriter);
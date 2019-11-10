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


// # Additional

// 1. Declare a function which will receive password string. Check is password strong enough:
//   - should contain at least one capital letter;
//   - length no less than 8 characters.
//   - should contain at leas one special character.

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  } else if (!password.match(/[A-Z]/)) {
    return false;
  } else if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    return false;
  }
  return true;
}

console.log(validatePassword('gjjlhGjj&jj'));

// 2. Make function which will generate password suggestion based on passed password, and required strongest.

function makeStrongPass(password) {
  let strongPass = '';
  const simpleChars = 'abcdefghijklmnopqrstuvwxyz';
  const specialChars = '!@#$%^&*(),.?":{}|<>';
  while (strongPass.length < (password.length + 8)) {
    strongPass += simpleChars[Math.floor(Math.random() * simpleChars.length)];
    strongPass += simpleChars[Math.floor(Math.random() * simpleChars.length)].toUpperCase();
    strongPass += specialChars[Math.floor(Math.random() * specialChars.length)];
  }
  return password + strongPass;
}

console.log(makeStrongPass('bla'));

// Assignment Code


// Create if statement that must be 12 Characters

// Create variables
var symbols = ["/", ":", "?", "!", "*", "$", "#", "@", "%", "^", "&", "(", ")" ];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordArray = [];
var allArray = []

function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password?")
  if (passwordLength < 8 || passwordLength >= 128) {
    var passLenthError = alert("Please limit between 8 and 20 characters");
    return; 
  }  
  var askSymbols = confirm("Use symbols?");
  var askNumbers = confirm("Use numbers?");
  var askUpperCase = confirm("Use uppercase characters?");
  var askLowerCase = confirm("Use lowercase characters?");
// Create if statements to join all the arrays
if (askSymbols ==true) {
  allArray = allArray.concat(symbols)
}
if (askNumbers===true) {
  allArray = allArray.concat(numbers)
}
if (askUpperCase===true) {
  allArray = allArray.concat(upperCase)
}
if (askLowerCase===true) {
  allArray = allArray.concat(lowerCase)
}

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()* allArray.length)
  var indexValue = allArray[randomIndex]
  passwordArray.push(indexValue)
  // console.log(passwordArray);
}
  return passwordArray.join("");
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input. *WAS GIVEN CODE*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//set return of generatePAssword to be value of textarea
  passwordText.value = password;
}


// Add event listener to generate button *WAS GIVEN CODE* 
generateBtn.addEventListener("click", writePassword);
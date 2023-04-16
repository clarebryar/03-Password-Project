// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Collecting users password length, and make sure it is between 8-128 characters
var passwordLength = window.prompt(
  `How many characters long would you like your password to be?`
);
console.log(passwordLength);
{
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8-128 characters");
  }
}
//
var passwordCharacters = window.prompt(
  "Should the password contain a special character?"
)
console.log(passwordCharacters);

var characterOptions = ["!#$%&'()*+,-./:;<=>?@\^_`{|}~"];


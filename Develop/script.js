// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

//Collecting users password length, and make sure it is between 8-128 characters
var passwordLength = window.prompt(
  `How many characters long would you like your password to be?`
);
console.log(passwordLength);
{
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8-128 characters");
}

window.alert("Your password must contain one of the following character types: lowercase, uppercase, numeric, and/or special characters, answer yes or no to the following questions for which character type(s) should be included in the password")

var  uppercase = window.prompt("Should the password contain an uppercase character?") 
if (uppercase == "yes") {
console.log("include uppercase");
}

var numeric = window.prompt("Should the password contain a number?");
if (numeric == "yes") {
  console.log("include number")
}

var characters = window.prompt(
  "Should the password contain a special character?"
);
if (characters == "yes")
console.log("include special character");

var characterOptions = ["!#$%&'()*+,-./:;<=>?@\^_`{|}~"];
}
}
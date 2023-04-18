// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = "!#$%&()*+-./:;<=>?@^_`{|}~";
console.log(characters.length);
var characterSelect = [Math.floor(Math.random() * characters.length)];

var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numericSelect = [Math.floor(Math.random() * numeric.length)];

var smallAlph = "abcdefghijklmnop";
var upperAlph = smallAlph.toUpperCase();

var smallAlphSelect = [Math.floor(Math.random() * smallAlph.length)];
var upperAlphSelect = [Math.floor(Math.random() * upperAlph)] 

var potentialChar = []
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Write password to the #password input

function writePassword() {
  
  //Collecting users password length, and make sure it is between 8-128 characters
  var passwordLength = window.prompt(
    `How many characters long would you like your password to be?`
  );
  console.log(passwordLength);
  {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8-128 characters");
      writePassword(); 
      }
    }
  
  var uppercase = window.confirm(
    "Should the password contain an uppercase character?"
  );
  if (uppercase == true) {
    potentialChar.concat(upperAlphSelect);
    console.log(uppercase);
    }
    
  

  var numeric = window.confirm("Should the password contain a number?");
  if (numeric == true ) {
   potentialChar.concat(numericSelect);
    console.log("include number");
  }

  var characters = window.confirm(
    "Should the password contain a special character?"
  );
  if (characters == true) {
    potentialChar.concat(characterSelect);
    console.log("include special character");
  }
  
 
  var password = generatePassword();
  
  function generatePassword() {
   for (var i = 0; i < passwordLength; i * passwordLength);
  }
}

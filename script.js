// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = "!#$%&()*+-./:;<=>?@^_`{|}~";

var characterSelect = [Math.floor(Math.random() * specialCharacters.length)];

var number = "123456789";
var numericSelect = [Math.floor(Math.random() * number.length)];

var smallAlph = "abcdefghijklmnop";
var upperAlph = smallAlph.toUpperCase();

var smallAlphSelect = [Math.floor(Math.random() * smallAlph.length)];
var upperAlphSelect = [Math.floor(Math.random() * upperAlph)];

var potentialChar = "";

var passCreate = "";

// Write password to the #password input
function generatePassword() {
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
  )
  if (uppercase === true) {
    potentialChar += upperAlph;
    console.log(uppercase);
  }

  var numeric = window.confirm("Should the password contain a number?")
  if (numeric === true) {
    potentialChar += number;
    console.log("include number");
  }

  var characters = window.confirm(
    "Should the password contain a special character?"
  )
  if (characters === true) {
    potentialChar += specialCharacters;
    console.log("include special character");
  }

  for (let i = 0; i < passwordLength; i++)
  {
    passCreate +=
      potentialChar[Math.floor(Math.random() * potentialChar.length)];
    console.log(passwordLength);
    console.log("passCreate", passCreate);
  }
  return passCreate;
}

//How do we get the values of uppercase, numeric and password to be evaluated here too?

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //Collecting users password length, and make sure it is between 8-128 characters
}

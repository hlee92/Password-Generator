// Assignment Code
var generateBtn = document.querySelector("#generate");

var potentialCharacters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()"

}

function getCharacters() {
  
  var characters = "";
  
  var lowercase = window.confirm("Do you want lower-case characters?")
  if(lowercase) {
    characters = characters + potentialCharacters.lowercase;
  }
  var uppercase = window.confirm("Do you want upper-case characters?")
  if(uppercase) {
    characters = characters + potentialCharacters.uppercase;
  }
  var numbers = window.confirm("Do you want to use numbers?")
  if(numbers) {
    characters = characters + potentialCharacters.numbers;
  }

  var symbols = window.confirm("Do you want to use symbols?")
  if (symbols) {
    characters = characters + potentialCharacters.symbols;
  }

  return characters;
}

// some function that gets the length from the user and returns it as a number

function getLength() {
  var length = window.prompt("Please enter a password length (must be between 8 to 128)")
  length = parseInt(length);
 // isNaN(length)
 // if input is NaN, ALERT the user, call getLength again
 if(isNaN(length)) {
   window.alert("Please enter a number");
   return getLength();
 }
 // if input is a number, but wrong value, ALERT the user, cal getLength again
 if(length < 8 || length > 128) {
  window.alert("Length must be at least 8 and no more than 128");
  return getLength();
 }
 // othewrise, simply return length;
 return length;
}



function generatePassword() {
  var characters = getCharacters();
  var length = getLength()
  var password = makePassword(characters, length)
  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

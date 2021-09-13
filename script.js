// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code I added 
const specialCharacters= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Code I added 

var length = password.length

function generatePassword() {
  prompt("Please choose the length of your password. (Must be 8 - 128 characters long)")
  if (length < 8) {
    alert("Password must be at least 8 characters")
    return null;
    }
  else if (length > 128) {
    alert("Password must be less than 129 characters")
    return null;
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Code I added
//for generatePassword

generatePassword();
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code I added to store the characters
const specialCharacters= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"

// Code added by me

function generatePassword() {
  var passwordLength = prompt("Please choose the length of your password. (Must be 8 - 128 characters long)")
  if (passwordLength >= 8 && passwordLength < 129) {
    document.querySelector("#password").value //How to store values??
    }
  else {
    var retry = alert("Password must be 8-128 characters.")
    retry.textContent.appendChild
    return null;
    }

  
  }


// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); //Added to stop the generate button from doing default.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


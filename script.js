// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code I added to store the characters
const specialCharacters= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); //Added to stop the generate button from doing default.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Code added by me

function generatePassword() {
  //Getting the password length
  var passwordLength = prompt("Please choose the length of your password. (Must be 8 - 128 characters long)")
  if (passwordLength >= 8 && passwordLength < 129) {
    var passwordNum = passwordLength.value //How to store values??
    lowercaseNum;
    return '';
    }
  else {
    var retry = alert("Password must be 8-128 characters.")
    retry;
    return 'Click "Generate Password" again';
    }
   //Incldue lowercase letters? 
  var lowercaseNum = confirm("Would you like to include lowercase letters?")
  if (lowercaseNum === true){
    //Store data somehow
    return '';
  }
  else {
    //store data somehow
  }
  //Include uppercase letters?
  var uppercaseNum = confirm("Would you like to include uppercase letters?")
  if (uppercaseNum === true){
    //Store data somehow
    return '';
  }
  else {
    //store data somehow
  } 

  //Include special characters?
  var specialCharNum = confirm("Would you like to include special characters?")
  if (specialCharNum  === true){
    //Store data somehow
    return '';
  }
  else {
    //store data somehow
  } 

  //Include  numbers?
  var numbersNum = confirm("Would you like to include numbers?")
  if (numbersNum  === true){
    //Store data somehow
    return '';
  }
  else {
    //store data somehow
  } 

  //To choose the choices they chose
  var charChoices = [ , ]
  
  //Randomizing password
  charChoices[Math.floor(Math.random() * choices[i].length)]

  //For loop 
  var randomPassword = ""
  for (i=0; i<0; i++){

  }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


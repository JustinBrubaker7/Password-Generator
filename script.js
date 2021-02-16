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

//my code start

//Genrate password function
function generatePassword() {
  function passwordLength(){
    length = prompt("How many charters you want?");
    return length;
  };

  passwordLength();

  var passcode = "";
  var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_";



  for (var i = 0; i <= length; i++) {
    var random = Math.floor(Math.random() * values.length);
    passcode += values.charAt(random);

  }
return passcode;

}

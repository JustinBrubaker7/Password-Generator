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
  var lowerCase = "abcdefghijkmnpqrstuvwxyz";
  var upperCase = "ABCDEFGHJKMNPQRSTUVWXYZ";
  var numbers = " 123456789";
  var symbols = "!@#$%^&*()_";

  ifUpperCase = confirm("Uppercase?");
  ifNumbers = confirm("You want numbers?");
  ifSymbols = confirm("You want symbols?");



  for (var i = 0; i <= length; i++) {
    if(ifUpperCase && !ifNumbers && !ifSymbols){
      var randomUpper = Math.floor(Math.random() * upperCase.length);
      var random = Math.floor(Math.random() * lowerCase.length);
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random));
      passcode = passcode.substring(0, length);

    } else if(ifUpperCase && ifNumbers && !ifSymbols){
      var randomUpper = Math.floor(Math.random() * upperCase.length);
      var random = Math.floor(Math.random() * lowerCase.length);
      var randomNum = Math.floor(Math.random() * numbers.length);
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random)).concat(numbers.charAt(randomNum));
      passcode = passcode.substring(0, length);

    } else if(ifUpperCase && ifNumbers && ifSymbols){
      var randomUpper = Math.floor(Math.random() * upperCase.length);
      var random = Math.floor(Math.random() * lowerCase.length);
      var randomNum = Math.floor(Math.random() * numbers.length);
      var randomSymbol = Math.floor(Math.random() * symbols.length);
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random)).concat(numbers.charAt(randomNum)).concat(symbols.charAt(randomSymbol));
      passcode = passcode.substring(0, length);
    }
    else {
      var random = Math.floor(Math.random() * lowerCase.length);
      passcode += lowerCase.charAt(random);
    }

  }
return passcode;
}

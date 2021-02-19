
/**********************************************************************************************
 * 
 * 
 * In script1.js this was my first attempt
 * In script2.js this was my second attemt after talking with Mr.Farish
 * 
 * 
 * 
 * 
 * 
 * **************************************************************************************
*/
















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
  var numbers = " 1234567890";
  var symbols = "!@#$%^&*()_";

  ifUpperCase = confirm("Uppercase?");
  ifNumbers = confirm("You want numbers?");
  ifSymbols = confirm("You want symbols?");





  for (var i = 0; i <= length; i++) {

    var random = Math.floor(Math.random() * lowerCase.length),
        randomNum = Math.floor(Math.random() * numbers.length),
        randomSymbol = Math.floor(Math.random() * symbols.length),
        randomUpper = Math.floor(Math.random() * upperCase.length);

    if(ifUpperCase && !ifNumbers && !ifSymbols){
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random));
      passcode = passcode.substring(0, length);

    } else if(ifUpperCase && ifNumbers && !ifSymbols){
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random)).concat(numbers.charAt(randomNum));
      passcode = passcode.substring(0, length);

    } else if(ifUpperCase && ifNumbers && ifSymbols){
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random)).concat(numbers.charAt(randomNum)).concat(symbols.charAt(randomSymbol));
      passcode = passcode.substring(0, length);

    } else if(!ifUpperCase && ifNumbers && ifSymbols){
      passcode += (lowerCase.charAt(random)).concat(numbers.charAt(randomNum)).concat(symbols.charAt(randomSymbol));
      passcode = passcode.substring(0, length);

    } else if(!ifUpperCase && !ifNumbers && ifSymbols){
      passcode += (lowerCase.charAt(random)).concat(symbols.charAt(randomSymbol));
      passcode = passcode.substring(0, length);
    } else if(!ifUpperCase && ifNumbers && !ifSymbols){
      passcode += (lowerCase.charAt(random)).concat(numbers.charAt(randomNum));
      passcode = passcode.substring(0, length);
    } else if(ifUpperCase && !ifNumbers && ifSymbols){
      passcode += upperCase.charAt(randomUpper).concat(lowerCase.charAt(random)).concat(symbols.charAt(randomSymbol));
      passcode = passcode.substring(0, length);
    } else {
      passcode += lowerCase.charAt(random);
    }

  }
return passcode;
}

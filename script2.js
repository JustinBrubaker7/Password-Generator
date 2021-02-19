/**********************************************************************************************

 * In script1.js this was my first attempt
 * In script2.js this was my second attemt after talking with Mr.Farish
 * 
 * ***************************************************************************************/
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

function lengthCall(){
    length = prompt("How many charters you want? Must be more than 8 characters and less than 128");
    if(length < 8 || length > 128){
        alert("must be great than 8 and less than 128 characters");
    } 
    return length;
}

//Genrate password function
function generatePassword() {
    //possible character choices
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "#", "$", ";", ",", "^", "&", "*", "=", "(", ")" , "_"];

    var passcode = [];
    var possiblePasscode = [];

    //promts for input 
    // var length = prompt("How many charters you want?");
    lengthCall();
    var ifLowerCase = confirm("Lowercase?");
    var ifUpperCase = confirm("Uppercase?");
    var ifNumbers = confirm("You want numbers?");
    var ifSymbols = confirm("You want symbols?");



    //if Lowercase is selected it will generate random character and push the rest of the array to "possibePasscode" array
    if (ifLowerCase) {
        var random = Math.floor(Math.random() * lowerCase.length);
        possiblePasscode = possiblePasscode.concat(lowerCase);
        passcode.push(lowerCase[random]);
    }

    //if Uppercase is selected it will generate random character and push the rest of the array to "possibePasscode" array
    if (ifUpperCase) {
        random = Math.floor(Math.random() * upperCase.length);
        possiblePasscode = possiblePasscode.concat(upperCase);
        passcode.push(upperCase[random]);

    }

    //if Numbers is selected it will generate random character and push the rest of the array to "possibePasscode" array
    if (ifNumbers) {
        random = Math.floor(Math.random() * numbers.length);
        possiblePasscode = possiblePasscode.concat(numbers);
        passcode.push(numbers[random]);
    }

    //if Symbols is selected it will generate random character and push the rest of the array to "possibePasscode" array
    if (ifSymbols) {
        random = Math.floor(Math.random() * symbols.length);
        possiblePasscode = possiblePasscode.concat(symbols);
        passcode.push(symbols[random]);

    }

    // loop through the possible passcode array to get random characters
    for (var i = passcode.length; i < length; i++) {
        randomCharacters = Math.floor(Math.random() * possiblePasscode.length);
        passcode.push(possiblePasscode[randomCharacters]);
    }

    //remove the array and join to make a string
    var thePassword = passcode.join('');

    // logs length to console to check length accuracy
    console.log(thePassword.length);

    return thePassword;
}

var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "~", "{", "}"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters.");
    passwordLength = (prompt("How many characters would you like your password to contain?"));
  }


  var randomCharacters =[]
  while (randomCharacters.length === 0) {
    if(confirm("Click ok to confirm special characters")){
      randomCharacters.push(specialCharacters)
    }
    if(confirm("Click ok to confirm numeric characters")){
      randomCharacters.push(number)
    }
    if(confirm("Click ok to confirm lowercase characters")){
      randomCharacters.push(lowerCharacters)
    }
    if(confirm("Click ok to confirm uppercase characters")){
      randomCharacters.push(upperCharacters)
    }
    if(randomCharacters.length === 0){
      alert('You must select at least one character type')
    }
  }
  var randomPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomArray = Math.floor(Math.random()*randomCharacters.length)
    var randomArrayChar = Math.floor(Math.random()*randomCharacters[randomArray].length)
    randomPassword += randomCharacters[randomArray][randomArrayChar]
  }
  console.log(randomPassword);
  return randomPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Assignment code here

// arrays of all necessary string data types
// Declaring  Variables
var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", ".", ">", ",", "<", "`", "~","|",]




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// confirming length of characters with prompt
function generatePassword() {
  
  var Text = "";
  var allChars = [];

  var passLength = prompt("how many characters would you like in your password? (choose between 8-128)");
    //if(COND){LOGIC}
    console.log(passLength)
    if(passLength < 8 || passLength > 128){
      alert("PLEASE ENTER VALID NUM");
      return;
        //generatePassword()
    };
    
      var choiceUpp = "Would you like UPPER case letters in your password?";
      okUpp = confirm(choiceUpp);

      var choiceLow = "Would you like lower case letter in your password?";
      okLow = confirm(choiceLow);

      var choiceNum = "Would you like numbers in your password?";
      okNum = confirm(choiceNum);

//true || false ==== true
//true && false === false
//true && true ==== true
  //var isCool = confirm("Are you cool?")
  //if(COND){LOGIC}

 
 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
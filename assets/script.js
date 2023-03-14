// Assignment code here

// arrays of all necessary string data types
// Declaring  Variables
var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", ".", ">", ",", "<", "`", "~","|",]




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password){
  passwordText.value = password;
  }
  else {
    passwordText.value = '';
  }

}

// confirming length of characters with prompt
function generatePassword() {
  
  var text = "";
  var allCharsArr = [];

  var passLength = prompt("how many characters would you like in your password? (choose between 8-128)");
    //if(COND){LOGIC}
   /* //console.log(passLength)*/
   
     if(passLength < 8 || passLength > 128){
      alert("PLEASE ENTER VALID NUM");
      //generatePassword();
      return;
    };

    /*
      else {
        (passLength > 7 === passLength < 127); 
        //generatePassword();
        return;
      }*/
    

    //true || false ==== true
//true && false === false
//true && true ==== true
  //var isCool = confirm("Are you cool?")
  //if(COND){LOGIC}
    

  
  var choiceUpp = "Would you like UPPER case letters in your password?";
    okUpp = confirm(choiceUpp);

  var choiceLow = "Would you like LOWER case letter in your password?";
    okLow = confirm(choiceLow);

  var choiceNum = "Would you like NUMBERS in your password?";
    okNum = confirm(choiceNum);

  var choiceSpecChar = "Would you like SPECIAL CHARACTERS in your password?";
    okSpecChar = confirm(choiceSpecChar);


//this says that when the person chooses ok to UPPER CASE it considers all concatinated uppercase letters
  {
  if (okUpp == true) {
    allCharsArr = allCharsArr.concat(upperCase);
    
  }
//same for lower
  if (okLow == true) {
    allCharsArr = allCharsArr.concat(lowerCase);
   
  }
//same for numbers
  if (okNum == true) {
    allCharsArr = allCharsArr.concat(numbers);
    
  } 
//same for special characters
  if (okSpecChar == true) {
    allCharsArr = allCharsArr.concat(specialChar);
    
  }

  
}

//the loop for the password calculations for the variable we created earlier for text and allcharsarr, add random math and .length and returns text
 {
  for (var i = 0; i < passLength; i++){
    text += allCharsArr[Math.floor(Math.random() * allCharsArr.length)];
    console.log(text)
  }
    return text;
    
}
}


//this creates an event listner for the click on generate password
generateBtn.addEventListener("click", writePassword);
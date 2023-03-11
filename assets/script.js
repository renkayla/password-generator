// Assignment code here

   // Declaring the Variable \\
 
                    
                    // Calling the Array \\
                    // Console.log to see the change!

                    
                    // length() Method \\
                    // Console.log to see the change!

                    
                    // indexOf() Method \\
                    // Reminder! Arrays start at 0! \\
                    
                    
                    // reverse() Method \\
                    // Console.log to see the change!


                    // sort() Method \\
                    // Console.log to see the change!

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

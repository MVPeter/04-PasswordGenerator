// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  // Prompt for password length.  Continue when input is in range
  var prompPWLenght = prompt("Please choose a password lenght between 8 and 128")
        while (prompPWLenght < 8 || prompPWLenght > 128) {
            var prompPWLenght = prompt("Please choose a password lenght between 8 and 128");
        }

        //Prompt for input of character pool.
        var acsiiCharaters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890"];
        var pSpecial = confirm("Include Special characters?:   " + acsiiCharaters[0]);
        var pCapital = confirm("Include Capital Letters?:   " + acsiiCharaters[1]);
        var pLowercase = confirm("Include Lower Case Letters?:    " + acsiiCharaters[2]);
        var pNumbers = confirm("Include Numbers:    " + acsiiCharaters[3]);
        
        //check which options were chosen. 
        if (pSpecial === true) {
            var tSpecial = [acsiiCharaters[0]]
        } else {
            var tSpecial = "";
        }

        if (pCapital === true) {
            var tCapital = [acsiiCharaters[1]]
        } else {
            var tCapital = "";
        }

        if (pLowercase === true) {
            var tLowercase = [acsiiCharaters[2]]
        } else {
            var tLowercase = "";
        }

        if (pNumbers === true) {
            var tNumbers = [acsiiCharaters[3]]
        } else {
            var tNumbers = "";
        }
       
        var asciiAllChars = (tSpecial + tCapital + tLowercase + tNumbers);

        var allCharsArray = asciiAllChars.split("");

        
        //Check if there were any character set choices made    
        if (asciiAllChars === "") {
            alert("You have not selected any characters please click Generate again.")
            throw new Error("You have not selected any characters please click Generate again.");
        } else {
            alert("Your password will include the following characters:  " + "\r" + "\r" + tSpecial + "\r" + tCapital + "\r " + tLowercase + "\r " + tNumbers);
        }
        var PWLength = asciiAllChars.length;

        // if (asciiAllChars === "") {
        //     alert("You have not selected any characters please click Generate again.");
        // // var asciiAllChars = ["No characters selected"]
        // } else 
        //     alert("Your password will include the following characters:  " + "\r" + "\r" + tSpecial + "\r" + tCapital + "\r " + tLowercase + "\r " + tNumbers);

        // var PWLength = asciiAllChars.length;


        //Random number array, chosen length
        
        var RNumbers = [];
        for (var i = 0; i < prompPWLenght; i++) {
            RNumbers.push(Math.floor(Math.random() * PWLength))
        }

        //Use the Randon Numbers array to Select Characters from asciiAllchars array
        var PWString = "";
        for (var i = 0; i < prompPWLenght; i++) {
            PWString += asciiAllChars[RNumbers[i]];
        }
        return PWString
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

        // var asciiUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(tCapital.length);
        console.log(tCapital);
        // var asciiLowerCase = asciiUpperCase.toLowerCase();
        console.log(tLowercase.length);
        console.log(tLowercase);
        // var numbDigits = "1234567890";
        console.log(tNumbers.length);
        console.log(tNumbers)
        // var asciiSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";
        console.log(tSpecial.length);
        console.log(tSpecial)
        // var asciiAllChars = asciiUpperCase + asciiLowerCase + numbDigits + asciiSpecial;
        console.log(asciiAllChars)
        console.log(allCharsArray.length)
        console.log(allCharsArray)

        //asciiAllChars.length.  Used to determine random number Max
        console.log(asciiAllChars.length);

        // RNumbers.  Array with the randon number 0 - user choice
        console.log(RNumbers);

        // PWArray. this is ascii pool created from the randon numbers
        console.log(PWString.length)
        console.log(prompPWLenght)
        console.log(PWString)        
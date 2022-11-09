const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")

function start() {
    startGenerating()
}

function startGenerating() {
    if (firstPassword.textContent.length <= 14 && secondPassword.textContent.length <= 14) {
    randomPasswordGenerator()
    }
    else {
        firstPassword.textContent = " "
        secondPassword.textContent = " "
        randomPasswordGenerator()
    }
}

function randomPasswordGenerator() {
    for (let i = 0; i < 15; i++) {
        let randomPassword = characters[Math.floor(Math.random() * characters.length)]
        let randomPassword2 = characters[Math.floor(Math.random() * characters.length)]
        firstPassword.textContent += randomPassword
        secondPassword.textContent += randomPassword2
    }
}






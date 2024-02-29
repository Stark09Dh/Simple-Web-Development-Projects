const passwordbox = document.getElementById("password");

let eye = document.getElementById("openeye");

let eyeState = "open"; // Initial state

function openeye() {
    if (eyeState === "open") {
        eye.src = "eye-close.png";
        passwordbox.type = "password";
        eyeState = "close";
    } else {
        eye.src = "eye-open.png";
        passwordbox.type = "text";
        
        eyeState = "open";
    }
}


const length = 12 ; 

const uppercase = "ABCDEFGHIJKMLMNOPQRSTUVWXY";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>?/-=!`";

const allchars = uppercase + lowercase + number + symbols ;

function generatePass(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)] ;
    }

    passwordbox.value = password;
    eye.src = "eye-close.png" ;
    eye.style.display = 'inline'

}

function copyPass(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);
    
}

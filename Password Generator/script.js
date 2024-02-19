const passwordbox = document.getElementById("password");

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
}

function copyPass(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);
    
}
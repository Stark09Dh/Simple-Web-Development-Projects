const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgbox = document.getElementById("imgbox");

let qrimg = document.getElementById("qrimg");

let userInput = document.getElementById("inpt");

function getqr() {
  if (userInput.value.length > 0) {
    qrimg.src = api_url + userInput.value;

    imgbox.classList.add("show-img");
  }
  else{
    userInput.classList.add("error");
    setTimeout(()=>{
        userInput.classList.remove("error");
    },1000)
  }
}

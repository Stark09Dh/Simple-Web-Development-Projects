const api_url = "https://api.quotable.io/random";

const quote = document.querySelector("blockquote");
const author = document.querySelector("span");

async function getdata(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author ;
    
    
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML,"Tweet Window","width=600, height= 400");
}

const btn = document.querySelector("#gen");
getdata(api_url);
btn.addEventListener("click",()=>{
    getdata(api_url);
})

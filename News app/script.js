const API_KEY = "287732862e464b54b09b5ac715fe7caa";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',()=>fetchnews("India"));

function reload(){
    window.location.reload();
}



async function fetchnews(query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    bindData(data.articles);
}

function bindData(articles){
    const cardcontainer = document.getElementById("cards-container");
    const newscardtemplate = document.getElementById("template-news-card");

    cardcontainer.innerHTML='';
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardclone = newscardtemplate.content.cloneNode(true);
        fillDataInCard(cardclone,article);
        cardcontainer.appendChild(cardclone);
    });
}

function fillDataInCard(cardclone,article){
    const newsImg = cardclone.querySelector(`#news-img`);
    const newstitle = cardclone.querySelector(`#news-title`);
    const newssource = cardclone.querySelector(`#news-source`);
    const newsdisc = cardclone.querySelector(`#news-disc`);

    newsImg.src = article.urlToImage;
    newstitle.innerHTML = article.title;
    newsdisc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleDateString("en-US",{
        timeZone:"Asia/jakarta"
    });

    newssource.innerHTML = `${article.source.name} - ${date}`;

    cardclone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    });

}

let curSelectedNav = null;

function onNavItemClick(id){
    fetchnews(id);
    const navItem  = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active')
}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');

searchButton.addEventListener('click',()=>{
    const query= searchText.value;
    if(!query) return;
    fetchnews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = null;
})
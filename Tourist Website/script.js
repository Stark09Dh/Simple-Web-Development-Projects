Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',()=>{
        if(e.value.length>0){
            document.getElementsByClassName('fa-caret-down')[i].style.transform="rotate(90deg)";
        }
        else{
            document.getElementsByClassName('fa-caret-down')[i].style.transform="rotate(0deg)";
        }
    })
})


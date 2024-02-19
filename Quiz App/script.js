const questions = [
    {
        question : "Which is the largest Animal in the World ?",
        answer : [
            {text : "Shark",correct:false},
            {text : "Blue Whale",correct:true},
            {text : "Elephant",correct:false},
            {text : "Giraffe",correct:false}
        ]
    },
    {
        question : "Mote h ri madam Mote - What Mote refers ?",
        answer : [
            {text : "Pom-Pom",correct:true},
            {text : "Watermelon",correct:false},
            {text : "Nitamb",correct:false},
            {text : "Oranges",correct:false}
        ]
    },
    {
        question : "Which is the largest Desert in the World ?",
        answer : [
            {text : "Sahara",correct:true},
            {text : "Thar",correct:false},
            {text : "Gobi",correct:false},
            {text : "Rajasthan",correct:false}
        ]
    },
    {
        question : "Which is the Smallest continent in the World ?",
        answer : [
            {text : "Asai",correct:false},
            {text : "Europe",correct:false},
            {text : "America",correct:false},
            {text : "Australia",correct:true}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-btn");
const nextbutton = document.getElementById("next-btn");

let currentQuesIndex = 0 ;
let score = 0 ;

function startQuiz(){
    currentQuesIndex = 0 ;
    score = 0 ;
    nextbutton.innerHTML = "next" ;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQues = questions[currentQuesIndex];
    let questionNo = currentQuesIndex+1;
    questionElement.innerHTML = questionNo+". "+currentQues.question ;

    currentQues.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextbutton.innerHTML = "Play again";
    nextbutton.style.display = "block";
}


function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}




nextbutton.addEventListener("click",()=>{
    if(currentQuesIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
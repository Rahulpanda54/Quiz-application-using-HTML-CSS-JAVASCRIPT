const container = document.querySelector('.container');
const questionbox = document.querySelector('.question');
const choices = document.querySelector('.choices');
const nextbtn = document.querySelector('.nextbtn');
const scorecard = document.querySelector('.Scorecard');

const quiz = [
    {
        Question:"Q. which of the following is not a CSS box model property ? ",
        choices:["margin","padding","border-radius","border-collapse"],
        answer: "border-collapse"
    },
    {
        Question:"Q. which of the following is not a valid way to declare a  function in JS ?",
        choices:["function myfunc() {}","let myfunction = function() {};","myfunction: function() {}"],
        answer:"myfunction: function() {}"

    },
    {
        Question:"Q. which of the following is not a javascript datatype ?",
        choices:["string","boolean","object","float"],
        answer:"float"
    },
    {
        Question:"Q. Which of the following language is not case sensitive ? ",
        choices:["java","python","cpp","HTML"],
        answer:"HTML"
    },
    {
      Question:"Q. which of the following is NOT a programming language ?",
      choices:["python","java","c++","HTML"],
      answer:"HTML"
    },
    {
      Question:"Q. which of the following language is used as a adding functionalities on the web pages ?  ",
      choices:["HTML","CSS","Java","Javascript"],
      answer: "Javascript"
    }
];
let currQues = 0;
let score = 0;
let quizover = false;

const showques = () =>{
    const quesdetails = quiz[currQues];
    // console.log(quesdetails);
    questionbox.textContent = quesdetails.Question;

    choices.textContent = "";
    for(let i=0;i<quesdetails.choices.length;i++){
        const currentchoice = quesdetails.choices[i];
        const choicediv = document.createElement('div');
        choicediv.textContent = currentchoice;
        choicediv.classList.add('choice')
        choices.appendChild(choicediv);

        choicediv.addEventListener('click',()=>{
            if(choicediv.classList.contains('selected')){
                choicediv.classList.remove('selected');
            }
            else{
                choicediv.classList.add('selected');
            }
        });
    }
}

// function to check answer....

const checkans = ()=>{
    const selectedchoice = document.querySelector('.choice.selected');
    console.log(selectedchoice);
    if(selectedchoice.textContent === quiz[currQues].answer){
        alert("correct answer !");
        score++;
    }
    else{
        alert("wrong answer !");
    }
    currQues++;
    if(currQues < quiz.length){
        showques();
    }
    else{
        totalscore();
        quizover = true;
    }
}
const totalscore = () =>{
    questionbox.textContent = "";
    choices.textContent = "";
    scorecard.textContent = `Your Score ${score} out of ${quiz.length}! `;
    nextbtn.textContent = "Play Again";
    // nextbtn.addEventListener('click',()=>{
    //     currQues = 0;
    //     showques();
    //     nextbtn.textContent = "Next";
    //     scorecard.textContent = "";
    // });
}  

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


shuffleArray(quiz);
showques();
nextbtn.addEventListener('click',()=>{
    const selectedchoice = document.querySelector('.choice.selected');

    if(!selectedchoice && nextbtn.textContent === "Next"){
        alert("select your answer ! ");
        return;
    }
    if(quizover === true){
        // currQues = 0;
        nextbtn.textContent = "Next";
        scorecard.textContent = "";
        currQues = 0;
        showques();
        quizover = false;
        score = 0;
    }
    else{
    checkans();
    }
});

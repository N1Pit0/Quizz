
function changeColor(){
    const button = document.querySelector("button");
    button.style.backgroundColor = `green`
    setTimeout(() =>{
        button.style.backgroundColor = `rgba(142,68,173,255)`;
    },300)
}

const data =
[
    {
        question: "What was the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },

    {
        question: "Who is the President of us?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Hillary Clinton",
        d: "Bernie Sanders",
        correct: "b"
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "none of the above",
        correct: "a"
    },

    {
        question: "What year was JavaScript launched?",
        a: "1993",
        b: "1994",
        C: "1995",
        d: "1996",
        correct: "c"
    }
]

let scoreCount = 0;
let quizCount = 0;



const checkAll = document.querySelectorAll(`.check`);
const question = document.getElementById(`question`);
const aa = document.getElementById(`aTxt`);
const bb = document.getElementById(`bTxt`);
const cc = document.getElementById(`cTxt`);
const dd = document.getElementById(`dTxt`);
const submit = document.getElementById(`submit`);
const cont = document.querySelector(`.bigBoi`);

generate();
function generate(){
    checkAll.forEach(element => {
        element.checked = false;
    });
    const curr = data[quizCount];
    
    question.innerText = curr.question;
    aa.innerText = curr.a;
    bb.innerText = curr.b;
    cc.innerText = curr.c;
    dd.innerText = curr.d;
    
}

submit.addEventListener(`click`, () =>{
    let ans;
    checkAll.forEach(element =>{
        if (element.checked){
            ans = element.id;
        }
        
    });
    if(ans === data[quizCount].correct){
        scoreCount++;
    }
    quizCount++;
    if(quizCount < data.length){
        generate()
    }
    else{
        cont.innerHTML=`<h2>You answered correctly at ${scoreCount}/${quizCount} questions.</h2>
        <button class="reload-btn" onclick = "location.reload()">Reload</button>`;
    }

});


console.log("Script loaded!");

const questions = [
    {
        question: "What is the name of Mario's brother?",
        answers: [
            {text: "Wario", correct:false},
            {text: "Yoshi", correct:false},
            {text: "Luigi", correct:true},
            {text: "Bowser", correct:false}

        ]
    },
    {
        question: "What color hat does Mario usually wear?",
        answers: [
            {text: "Green", correct:false},
            {text: "Red", correct:true},
            {text: "Yellow", correct:false},
            {text: "Blue", correct:false}

        ]
    },
    {
        question: "What is Princess Peach often the ruler of?",
        answers: [
            {text: "Mushroom Kingdom", correct:true},
            {text: "Hyrule", correct:false},
            {text: "Sarasland", correct:false},
            {text: "Koopa Kingdom", correct:false}
        ]
    },
    {
        question: "What kind of creature is Yoshi?",
        answers: [
            {text: "Dragon", correct:false},
            {text: "Turtle", correct:false},
            {text: "Bird", correct:false},
            {text: "Dinosaur", correct:true}
        ]
    },
    {
        question: "What is Princess Peach often the ruler of?",
        answers: [
            {text: "Mushroom Kingdom", correct:true},
            {text: "Hyrule", correct:false},
            {text: "Sarasland", correct:false},
            {text: "Koopa Kingdom", correct:false}
        ]
    },
    {
        question: "What happens when Mario gets a Super Star?",
        answers: [
            {text: "Shrinks", correct:false},
            {text: "Invisibility", correct:false},
            {text: "Invincibility", correct:true},
            {text: "High Jump", correct:false}
        ]

    },
    {
        question: "What is the name of the galaxy-based Mario game series?",
        answers: [
            {text: "Super Mario Galaxy", correct:true},
            {text: "Mario Universe", correct:false},
            {text: "Mario in Space", correct:false},
            {text: "Mario Odyssey", correct:false}
        ]
    },
    {
        question: " What item do you collect to complete a level in Super Mario 64?",
        answers: [
            {text: "Coins", correct:false},
            {text: "Mushrooms", correct:false},
            {text: "Moons", correct:false},
            {text: "Stars", correct:true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currquestionidx = 0;
let score = 0;

function start() {
    currquestionidx = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {
    resetState()
    let current_question = questions[currquestionidx];
    let questionNo = currquestionidx + 1;
    questionElement.innerHTML = `${questionNo}. ${current_question.question}`;

    current_question.answers.forEach(answer => {
        button = document.createElement("button");
        button.innerHTML = answer.text;
        answerButtons.appendChild(button);
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click",selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    };
}

function selectAnswer(e) {
    const chosen_button = e.target;
    const iscorrect = chosen_button.dataset.correct == "true";

    if (iscorrect) {
        chosen_button.classList.add("correct");
        score++;
    } else{
        chosen_button.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 8!`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = "block";
}
function nextQuestion() {
    currquestionidx++;
    if (currquestionidx < questions.length) {
        showQuestion();
    } else {
        showScore();}
}
nextButton.addEventListener("click", ()=>{
    if (currquestionidx < questions.length) {
        nextQuestion();
    } else {
        
        start();
    }

})

start();
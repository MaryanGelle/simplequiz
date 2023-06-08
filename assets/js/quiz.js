const username = JSON.parse(localStorage.getItem('username'));

const h1 = document.getElementById('welcome-h1');

h1.innerText = `Welcome to the Quiz ${username}`;
// Array have indexes
// the  index starts from 0
// The first element lies at index zero

const quizdata = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '8', isCorrect: false },
            { text: '6', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '10', isCorrect: false },
        ]

    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false },

        ]



    },
    {
        question: "What is the capital city of Tunisia?",
        answers: [
            { text: 'Agadir', isCorrect: false },
            { text: 'Tounis', isCorrect: true },
            { text: 'Leroun', isCorrect: false },
            { text: 'London', isCorrect: false },
        ]


    },
    {
        question: "Who wrote the play of Romeo and Juliet?",
        answers: [
            { text: 'Oscar Wild', isCorrect: false },
            { text: 'James Austin', isCorrect: false },
            { text: 'William Shakespear', isCorrect: true },
            { text: 'Anna Rose', isCorrect: false },
        ]


    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: 'Vincent van Gogh', isCorrect: false },
            { text: 'Leonardo da Vinci', isCorrect: true },
            { text: 'Pablo Picasso', isCorrect: false },
            { text: 'Jackson Pollock', isCorrect: false },
        ]


    },
    {
        question: "What is your body's largest organ",
        answers: [
            { text: 'Brain', isCorrect: false },
            { text: 'Heart', isCorrect: false },
            { text: 'Body', isCorrect: false },
            { text: 'Skin', isCorrect: true },
        ]


    },



];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = quizdata[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButtons.innerHTML = ""; // Clear previous answer buttons

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        button.addEventListener("click", () => {
            if (answer.isCorrect) {
                button.classList.add("true");
                score++;
            } else {
                button.classList.add("false");
            }
            disableAnswerButtons();
            showNextButton();
        });
    });


    if (currentQuestionIndex === quizdata.length - 1) {
        nextButton.innerHTML = "Finish";
    }

    nextButton.style.display = "none"; // Hide the next button
}

function showNextButton() {
    nextButton.style.display = "block"; // Show the next button
}

function disableAnswerButtons() {
    const buttons = answerButtons.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Disable answer buttons
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizdata.length) {
        showQuestion();
    } else {
        // Quiz finished, display score or perform other actions
        // You can customize this part according to your requirements
        questionElement.innerHTML = "Quiz Finished!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
        console.log("Score:", score);
    }
});


startQuiz();











































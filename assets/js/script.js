






// THEN I can save my initials and score


// GIVEN I am taking a code quiz //
// when page is loaded //
// ~then display home screen //


// start option 1 of 2 - view high scores //

// when i click the high score button //
// then hide home screen //
// then display high scores and back button //

// when user clicks back button //
// then hide high scores //
// then display home screen //
// end option 1 of 2 //


// start option 2 of 2 - start game //
// WHEN I click the start button //
// THEN a timer starts and I am presented with a question and answer buttons //

// when answer button is clicked //
// if I answer a question incorrectly //
// then time is subtracted from timer //
// THEN I am presented with another question //
// If there is another question //
// then display next question and answer buttons and repeat //

// WHEN all questions are answered or the timer reaches 0 //
// THEN the game is over //
// then stop timer //
// then hide question and answer buttons//
// then display save high score //
// - form input //
// - submit button //
// - return button //

// when save button is clicked //
// then initials and score are saved to local storage //
// then hide save scores //
// then display home screen //

// when return button is clicked //
// then hide save scores //
// then display home screen //
// end option 2 of 2 //

// -------------------------------- //





const quizButton = document.getElementById("start-quiz");
quizButton.addEventListener('click', startQuiz)

// const questionEl = document.getElementById('question-box')
let randomizedQuestionArray, currentQuestion

// const answerButtons = document.getElementById('button')

let global_index = 0
let correctAnswers = 0


$(document).ready(function() { 
    $("#restart-quiz").click(function() {
        $("#content").show()
        $("#question-article").hide()
        global_index = 0
        correctAnswers = 0
    })

    $("#question-article").hide()
    $("#score-screen").hide()
});



// make functions for quiz //
    


function startQuiz() {
    console.log('start' + global_index)
    $("#content").hide()
    $("#question-article").show()

    randomizedQuestionArray = questions.sort(() => Math.random() - .5)

    for(let i = 0; i < 4; i++) {
        button = $("#btn" + i)
        button.click(function() {
            selectAnswer(i)
            console.log(i + "answer button clicked: " + currentQuestion.answer[i] + " = " + currentQuestion.question)
        })
    }
    
    showQuestion(global_index)
       
    // randomQuestions = questions.sort(() => Math.random() - .5)
    // currentQuestion = randomQuestion
    // // answerButtons.innerText = questions.answer
    // $("#questions").text(currentQuestion.question)
    // // for( declare iterator, loop conditional, loop iterator) { }
    // for(let i = 0; i < currentQuestion.answer.length; i++) {

    // }
   
    // nextQuestion()
}


// function nextQuestion() {
//     showQuestion(randomQuestion[currentQuestion])
// }

function showQuestion(index) {
    // questionEl.innerText = questions.question
    // questions.answerButtons.forEach(answer => {
    //     const answerButtons = document.createElement('button')
    //     button.innerText = answer.innerText
    //     button.classList.add('button')
    // })

    currentQuestion = randomizedQuestionArray[index]
    $("#questions").text(currentQuestion.question)
    for(let i = 0; i < currentQuestion.answer.length; i++) {
        button = $("#btn" + i)
        button.text(currentQuestion.answer[i])
    }
    global_index++
}

function selectAnswer(index) {
   if(currentQuestion.correctAnswer === index) {
    correctAnswers++
   }

   if(global_index >= randomizedQuestionArray.length) {
    endQuiz()
   } else {
    showQuestion(global_index)
   }
}

function endQuiz() {
    $("#question-article").hide()
    $("#score-screen").show().prepend("You finished the quiz with " + correctAnswers + " out of " + randomizedQuestionArray.length + ".")
}

// function (endQuiz) {

// }

// make variable and function for timer //
const startTime = 1;
let time = startTime * 60;

const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 1 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}:${seconds}`;
//     time--;

//    if (time < 1) {
//         clearInterval(time);
//     }

// }
//make arrays for 5 questions and answers //

let questions = [

    {
        question: " ______ is not a data type in javascript. ",
        answer: ['Boolean', 'upper-case', 'string', 'symbol'],
        correctAnswer: 1
    },

    {
        question:" Global variables have global __________, which means they are visible everywhere in the javascript code. ",
        answer: ['position', 'alignment', 'scope', 'borders'],
        correctAnswer: 2

    },

    {
        question:" Which method returns the length of a string?",
        answer: ['push()', 'forEach()', 'Concat()', 'length()'],
        correctAnswer: 3

    },

    {
        question:" Which is not a way to define a variable in JavaScript?",
        answer: ['return', 'var', 'const', 'let'],
        correctAnswer: 0

    },

    {
        question:" What does NaN stand for? ",
        answer: ['not a name', 'not a number', 'name and number', 'neat and nice'],
        correctAnswer: 1

    },
  
] 



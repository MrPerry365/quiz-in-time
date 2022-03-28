// list of id's
const startButton = document.getElementById('startQuiz');
    $('#startQuiz').toggleClass('hide')
    $('.content').toggleClass('hide')
    $('questions-page').removeClass('hide')
const highButton = document.getElementById('high-scores');
var question = document.getElementById('question')
var answer0 = document.getElementById('answer0');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');

highButton.addEventListener('click', highScores)
startButton.addEventListener('click', startQuiz)

// function highScores() {

// if {
//     (timeLeft > 0) ++ timeLeft > highScores(log.value);

//     else {
//         return
//     }
// }
// };

function startQuiz() {
    startButton('clicked');
    
       
}


//make 60 second countdown timer with stop function when all questions are answered or out of time//

    // function startTimer(seconds) {
    // let time = seconds;

    // const interval = setInterval(()) ==> {
    //     counter--;

    //     if(counter =< 0 ) {
    //         clearInterval(interval)
    //     }
    // }
    // } 1000;

    // startTimer(60000);    


//make function to replace high score with input text if true. if false prompt try again button//


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

    




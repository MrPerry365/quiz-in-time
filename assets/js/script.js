
// make a function to check if question is correct. if so go to next question. if not deduct time and then go to next question//

// make a function to start quiz and timer when the start quiz button is clicked, once answered go to next question //
// clicking button displays high scores//
const highButton = document.getElementById('high-scores')
highButton.addEventListener('click', highScores)

function highScores() {
console.log('Boom Boom!')


}


//$('#start-button').on('click') === startTimer ++ startQuiz
const startButton = document.getElementById('startQuiz')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Bang!!')
    

    

        
    
}


// make 60 second countdown timer with stop function when all questions are answered or out of time//
    // function startTimer(seconds) {
    // let time = seconds;

    // const interval = setInterval(()) ==> {
    //     counter--;

    //     if(counter <0 ) {
    //         clearInterval(interval)
    //     }
    // }
    // }, 1000;

    // startTimer(60);    


// make function to replace high score with input text if true. if false prompt try again button//

//
// make arrays for 5 questions and answers //
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

    




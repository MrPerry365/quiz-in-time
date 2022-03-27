// 

// clicking button displays high scores//
const highButton = document.getElementById('high-scores')

highButton.addEventListener('click', highScores)

function highScores() {
console.log('Boom Boom!')
}
// make a function to check if question is correct. if so go to next question. if not deduct time and then go to next question//

// make a function to start quiz and timer when the start quiz button is clicked, once answered go to next question //

//$('#start-button').on('click') === startTimer ++ startQuiz
const startButton = document.getElementById('start-button')

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
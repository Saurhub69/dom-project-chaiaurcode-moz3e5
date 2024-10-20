const random_Number = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

//if user already guess number the number will stored 
//in this array to avoid the same number
//design game
let prevGuess = []
let numGuess = 1 //game will startOver from 1
let playGame = true //lets start 

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN){
        alert('Please Enter A Valid Number')
    }else if(guess < 1){
        alert('Please Enter A Number More Than One')
    }else if(guess > 100){
        alert('Please Enter A Number Less Than Hundred')
    }else{
        prevGuess.push(guess)
        if(numGuess == 11){
            alert(`You have exceeded the limit and also lost the game ,please restart the game ${numGuess}`)
        }
    }
}




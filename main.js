const guess = document.querySelector('#guess')
const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guesSlot =document.querySelector('.guesses')
const remaning =document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
// console.log(userInput);
let randomNum =parseInt(Math.random()*100+1);
const p = document.createElement('p')

let prevGuess = []
let numGuess = 0;
let playGame =true

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault()// for stoping to send data to the database
       const guess =parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    
    })
}
function validateGuess (guess){

    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a valid number greater than 0')
    }
     else if(guess>100){
        alert('Please enter a valid number less than 100');
    }
    else {
        prevGuess.push(guess);
        if(numGuess==10){
            cleanUpGuess(guess)
            displayMsg(`Game over random num was ${randomNum}`)
            endGame();

        }else {
            cleanUpGuess(guess)
            checkGuess(guess);
            
        }
        
    }
}

function checkGuess ( guess){
    if(guess === randomNum){
        displayMsg(`YOU GUESSED IT RIGHT`)
        endGame()

    }
    else if( guess <randomNum){
        displayMsg(` num is TOO low `)
    }
    else if( guess >randomNum){
        displayMsg(` num is TOO high `)
    }
 
}

function cleanUpGuess(guess){
 userInput.value=''
guesSlot.innerHTML+=` ${guess} ,`
numGuess++;
console.log(numGuess);

remaning.innerHTML=`${10-numGuess}`

}
function displayMsg(msg){

lowOrHi.innerHTML=`<h4>${msg}</h4>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML =`<h4 id ="newGame">start newGame</h4>`
  startOver.appendChild(p)
  playGame=false;
  newGame() 
}
function newGame(){
  const newGame=  document.querySelector('#newGame')
  newGame.addEventListener('click', function (){
     randomNum =parseInt(Math.random()*100+1);
     prevGuess=[]
     numGuess=0
     guesSlot.innerHTML=''
     remaning.innerHTML=`${10-numGuess}`
     userInput.removeAttribute(disabled)
     startOver.removeChild(p)
     
    playGame=true;

  })
    
}
// hint
const hint =document.querySelector('#HINT')
hint.addEventListener('click',()=> hint.innerHTML=`num is ${randomNum}`)
 
let usrChoiceDisplay=document.querySelector('.usr-choice')
let compChoiceDisplay=document.querySelector('.comp-choice')
let resultDisplay=document.getElementById('result')
let usrScoreDisplay=document.querySelector('.user-score')
let compScoreDisplay=document.querySelector('.comp-score')
let drawScoreDispaly=document.querySelector('.draw-score')
let allChoices=document.querySelectorAll('button')
let compChoice
let usrChoice
let result
let userScore=0
let compScore=0
let drawScore=0
allChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
usrChoice=e.target.id
usrChoiceDisplay.innerHTML=usrChoice
compGenerator()
resultGenerator()

}))
function compGenerator(){
    number=Math.floor(Math.random()*3+1)
    if(number===1){

        compChoice='rock'
    }
    if(number===2){
        compChoice='paper'
    }
    if(number===3){
        compChoice='scissors'
    }
    compChoiceDisplay.innerHTML=compChoice
}

function resultGenerator(){
   
    if (compChoice===usrChoice){
    result="Draw!"
   drawScore++
    
    }
    if(compChoice==='rock'&& usrChoice==='paper')
    {
        result="You won!"
        userScore++
    }
    if(compChoice==='rock'&& usrChoice==='scissors')
    {
        result="You lost!"
       compScore++
    }
    if(compChoice==='paper'&& usrChoice==='rock')
    {
        result="You lost!"
        compScore++
       
    }
    if(compChoice==='paper'&& usrChoice==='scissors')
    {
        result="You won!"
       userScore++
    }
    if(compChoice==='scissors'&& usrChoice==='rock')
    {
        result="You won!"
        userScore++
    }
    if(compChoice==='scissors'&& usrChoice==='paper')
    {
        result="You lost!"
        compScore++
    }
   
    resultDisplay.innerHTML=result
    compScoreDisplay.innerHTML=compScore
    usrScoreDisplay.innerHTML=userScore
    drawScoreDispaly.innerHTML=drawScore
}



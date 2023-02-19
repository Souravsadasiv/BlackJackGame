let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let messsge=""
// messsge="we're logging out"
// console.log(sum);

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("card-el")

// let playerName="Soura"
// let playerChips=145
let player={
    name : "Sourav",
    chips : 145
}
let playerEl= document.getElementById("player-el")
playerEl.textContent= player.name +": $"+ player.chips


function getRandomCard(){
    let num=Math.floor((Math.random()*13))+1
    if(num>10){
        return 10
    }else if(num === 1){
        return 11
    }else{
        return num
    }
}

function startGame(){
    isAlive=true
    let firstNum=getRandomCard()
    let secondNum=getRandomCard()
    cards=[firstNum,secondNum]
    sum = cards[0]+cards[1]
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards :"

    for(let i=0;i<cards.length; i++){
        cardsEl.textContent +=cards[i]+ " "
    }
    sumEl.textContent= "sum :"+ sum
    if(sum<21){
        message="Do u want to draw a new card? "
    }else if(sum === 21){
        message="Wohoo! You have got blackjack! "
        hasBlackJack = true
    }else{
        message="You are out of the game! "
        isAlive = false
    }
    console.log(messsge)



    messageEl.textContent = message
} 
function newCard(){
    let card=getRandomCard()
    sum +=card
    cards.push(card)
    console.log(cards)
    if(isAlive=== true && card !=11){
        renderGame();
    }
}

 

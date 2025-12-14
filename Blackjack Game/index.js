let player = {
    name: "Mustafa" ,
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10 ) {
        return 10 
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard + secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    isAlive = true
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You are out of the game!"
    isAlive = false
} 
    messageEL.textContent = message
}


function newCard() {
        if (isAlive === true && hasBlackJack === false) {
            let card = getRandomCard()
            sum = sum + card
            cards.push(card)
            renderGame()
        }
    
}

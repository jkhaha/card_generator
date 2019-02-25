document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#button')
  button.addEventListener('mouseover', generateCards)
  button.addEventListener('click', dealCards)
  let fourCards = []

let deck = []
let suits = ['hearts', 'diamonds', 'spades', 'clubs']
let numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
  function generateCards(){
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
      let card = {number: numbers[j], suit: suits[i]}
      deck.push(card)
      }
    }
    button.removeEventListener('mouseover', generateCards)
  }


  function dealCards(){
    for (let i=0; i < 4; i++){
      var cards = deck[Math.floor(Math.random()*deck.length)];
      fourCards.push(cards)
    }
    deck = deck.filter(card => !fourCards.includes(card))
    console.log(fourCards, deck);
  }









})

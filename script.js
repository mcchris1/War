//Identify objects, actions, variables  

const SUITS = ['♠', '♥', '♦', '♣'] 
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.cards = [];
        this.makeDeck()
    }

    makeDeck() {
        for (let i=0; i < SUITS.length; i++) {
            for (let j=0; j < RANKS.length; j++){
                this.cards.push(new Card(SUITS[i], RANKS[j], j + 2))
            }
        }

        this.shuffle()
    }

    shuffle() {
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
    }
    
}

class GameOfWar {
    constructor(){
        this.p1 = []
        this.p2 = []
        this.pile = []
        this.init()
    }

    init(){
        let deck = new Deck() // { cards: [{}, {}, {}]}
        this.p1 = deck.cards.splice(0, 26) // [{}, {}...] 26 Cards
        this.p2 = deck.cards // Since splice mutates original deck.cards array, we can just assign what remains to p2
    }

    playGame(){
        console.log("let's play")
        while(this.p1.length > 0 && this.p2.length > 0){
            let p1Card = this.p1.pop()
            let p2Card = this.p2.pop()
    
            if (p1Card.value > p2Card.value){
                // Player 1 wins round
                console.log("Player 1 wins hand")
                this.p1.unshift(p2Card, p1Card, ...this.pile)
                this.pile.length = 0
            } else if (p1Card.value < p2Card.value) {
                // Player 2 wins round
                console.log("Player 2 wins hand")
                this.p2.unshift(p1Card, p2Card, ...this.pile)
                this.pile.length = 0
            } else {
                // Declare war
                this.pile.push(p1Card, p2Card)
                this.war()
            }
        }
    
    }
// startGame()
// function startGame() {
    
// } 
//take card from each hand and compare, winner takes all
//let p1Card = this.p1.pop
//console.log (p1Card)
//let p2Card =
// if(p1Card.value > p2Card.value){
//     console.log("P1 wins")
//     this.p1.unshift(p2card, p1card)
// }else {
//     war()
// } ---> LOOP
// --->clear array, "pile"
// ---> remove 3 more cards from each hand, add to pile
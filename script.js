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
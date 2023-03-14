const suits = ['♠', '♥', '♦', '♣'] 
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const values = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10, 
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.cards = cards;
        this.makeDeck()
    }
    makeDeck() {
        for (let i=0; i< suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(newCard(suits[i], ranks[j], j+1));
            }
        }
        
        this.shuffle();
    }

    shuffle() {
       this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
    }
}

class GameOfWar {
    constructor() {
        this.p1 = []
        this.p2 = []
        this.pile = []
        this.gameInit();
    }

    gameInit() {
        let deck = new Deck()
        this.p1.push(...deck.cards.splice(0, deck.cards.length/2))
        this.p2.push(...deck.cards);
    }

    startGame() {
        //set up game logic loop -- WHILE both players have cards in their hands
        let p1Card = this.p1.pop()
        let p2Card = this.p2.pop()

        if (p1Card.val === p2Card.val){
            console.log("War!");
            this.pile.push(p1Card, p2Card)
            this.war()
        } else if (p1Card.val > p2Card.val){
            this.p1.unshift(p2Card, p1Card, ...this.pile);
            console.log("Player 1 Wins", this.p1.length);
            //clear the pile
        } else {
            this.p2.unshift(p2Card, p1Card, ...this.pile);
            console.log("Player 2 Wins");
            //clear the pile
        }
    }

    war(){
        //Adjust for edge cases (a player doesn't have enough cards:: does p1 have enough? does p2?)
        this.pile.push(...this.p1.splice(0, 3))
        this.pile.push(...this.p2.splice(0, 3))
        console.log(pile)

    }
}

let game - new GameOfWar();
game.startGame();
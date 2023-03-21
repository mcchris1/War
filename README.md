# War

## What is it good for?
![War music](https://upload.wikimedia.org/wikipedia/en/2/2e/U2_War_album_cover.jpg)

<!-- Blockquote -->

> May you dream of the devil and wake in fright.   

---
The [**correct answer**](https://en.wikipedia.org/wiki/War_(band)) is simulations.

<p>Such as:</p>

- [x] protestin
- [x] nothin
- [x] time-killin

### The rules:

#### Remember war, the _card game_? Remember _cards_? Sure you do. That. Except without the tedium of actually playing it, or friendship. Just run the program, you ape.

---
### The OOP Abstracted:

#### Class "Cards" identified by suit, rank; "Deck" by cards contained and method by which it's made: we raondomize it with a shuffle function; "GameOfWar" splices _new_ decks into respective piles for players and discards.

#### Since the class "Card" is composed of arrays, _for loops_ are implemented to cycle through players' decks.

#### Comparison statements determine whose "popped" card wins each battle, while "else" signifies there be war, in which case there's a fun bit involving push() to the aforementioned individual piles. 

#### Game runs so long as each player has more than one card, with the exception of an edge case in which one player doesn't have enough cards to go warrin', represented thusly in the case of Player 1's demise: 
```javascript
if (this.p1.length < 4) {
  this.p2.unshift(...this.pile, ...this.p1)
  this.pile.length = 0
  this.p1.length = 0
} else if...
```
<p>The end</p>

<p>End of simulation</p>
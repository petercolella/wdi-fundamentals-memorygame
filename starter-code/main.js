console.log("JS file is connected to HTML! Woo!")
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
<!--
//if (cardTwo === cardFour) {
//	window.alert("You found a match!")
//} else if (cardTwo !== cardFour) {
//	window.alert("Sorry, try again.")
//}
-->
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}

}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png' alt='King of Spades'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png' alt='Queen of Spades'>"; //queen
	}

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

 function isMatch(cardsInPlay) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}

}

}

createBoard();


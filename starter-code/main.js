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
var cards = ('queen', 'queen', 'king', 'king')

var board = document.getElementById('game-board');

function createBoard() {

	for (var i=0; i<cards.length; i++) {

		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		board.appendChild(cardElement);
	}
}


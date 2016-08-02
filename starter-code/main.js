// Create card and board variables

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
var gameBoard = document.getElementById("game-board");

if (cardOne == cardThree) {
	alert("You've found a match!")
} else {
	alert("Sorry, better luck next time!")
}


function createBoard () {
	for(var i=0;i<4;i+=1 ){
		var createCard = document.createElement("div");
		createCard.className = "card";
		gameBoard.appendChild(createCard);
	}
}

createBoard();

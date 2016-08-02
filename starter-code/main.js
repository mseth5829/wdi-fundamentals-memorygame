// Create card and board variables

var gameBoard = document.getElementById("game-board");

var cards = [
'<img src="queen.png" alt="Queen of Clubs" />',
'<img src="queen.png" alt="Queen of Clubs" />',
'<img src="king.png" alt="King of Clubs" />',
'<img src="king.png" alt="King of Clubs" />'
];
var cardsInPlay = [] ;
var cardElement = document.getElementsByClassName("card");
var score = 0


// Create board

function createBoard () {
	for(var i=0; i<cards.length; i++ ){
		var createCard = document.createElement("div");
		createCard.className = "card";
		gameBoard.appendChild(createCard);
	}


//Assign values to cards

	for(var i=0; i<cards.length; i++){
	cardElement[i].setAttribute('data-card',cards[i]);
	}	
}


createBoard();

//Add click event listeners to each card element

for (var i=0;i<cards.length;i++) {
	cardElement[i].addEventListener('click', showImage(i));
	cardElement[i].addEventListener('click',isTwoCards);
}

//Have image show on click

function showImage (i) {
	return function (){
			cardElement[i].innerHTML=cardElement[i].getAttribute('data-card');
	}
}


//Checking if cards are in play

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

//Test if cards are a match

function isMatch () {
	if (cardsInPlay[0]==cardsInPlay[1]) {
		alert("You've found a match!")
		score +=1
	} else {
		alert("Sorry, better luck next time!")
	}
	for (var i=0;i<cards.length;i++) {
		cardElement[i].innerHTML=""
	}
	var printScore = document.getElementById("score");
	var totalScore = document.createTextNode(score);
	printScore.replaceChild(totalScore,printScore.childNodes[0]);
}




































console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
	}
}

let cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again");
}
}
function flipCard() {
	cardId = this.getAttribute('data-id');
	card = this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.getAttribute('data-id')
	checkForMatch(); 
	//if (cardsInPlay.length === 2 && cardOne === cardTwo) {
		//alert("You found a match!");
	//}else {
		//alert("Sorry, try again");
}
  function reset(){
        window.location.reload("Reset Game")
      }

createBoard();
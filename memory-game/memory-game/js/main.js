console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
}
}
function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
	//if (cardsInPlay.length === 2 && cardOne === cardTwo) {
		//alert("You found a match!");
	//}else {
		//alert("Sorry, try again");
}

flipCard(0);
flipCard(3);
checkForMatch(); 
console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne,);
console.log("User flipped queen");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped queen");
if (cardsInPlay.length === 2 && cardOne === cardTwo) {
alert("You found a match!");
}else {
alert("Sorry, try again");
}
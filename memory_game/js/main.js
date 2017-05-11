// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
//



var cards = [{
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-diamond.png"
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: "images/queen-of-hearts.png"
  }
];
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("We have a match!")
  } else {
    alert("Sorry, try again");
  }
}


function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    checkForMatch()
  }

  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);

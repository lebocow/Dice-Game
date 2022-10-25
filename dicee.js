// Variables
var player1Dice = Math.floor(Math.random() * 6 + 1);
var player2Dice = Math.floor(Math.random() * 6 + 1);

var h1Text = document.querySelector("h1");

var img1 = document.querySelector(".img1");
img1.setAttribute("src", "images/dice" + player1Dice + ".png");

var img2 = document.querySelector(".img2");
img2.setAttribute("src", "images/dice" + player2Dice + ".png");

// Dice Logic Game
if (player1Dice === player2Dice) h1Text.textContent = "Draw!";
else if (player1Dice > player2Dice) h1Text.textContent = "Player1 Wins!";
else h1Text.textContent = "Player2 Wins!";

// Asking for names

// Asking for player1 name
var player1 = prompt("Enter player 1 name:");
// Capitalizing the first letter
player1 = player1.slice(0,1).toUpperCase() + player1.slice(1, player1.length);

// Asking for player2 name
var player2 = prompt("Enter player 2 name:");
// Capitalizing the first letter
player2 = player2.slice(0,1).toUpperCase() + player2.slice(1, player2.length);




// Replacing player names
// Player1
document.querySelectorAll("p")[0].innerHTML = player1;

// Player2
document.querySelectorAll("p")[1].innerHTML = player2;




// Generating Random Images

// Random Number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Random Number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random image 1 based on random number 1
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 +".png");

// Random image 1 based on random number 2
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 +".png");



// Conditionals for functioning of game

// If player1 wins
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = ("🚩 " + player1 + " Wins");
}
// If player2 wins
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent =  (player2 + " Wins 🚩");
}
// If it is a Draw
else {
    document.querySelector("h1").textContent = "Draw!";
}
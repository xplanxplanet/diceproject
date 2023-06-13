let player1 = "player 1";
let player2 = "player 2";

function editNames() {
  player1 = prompt("Change player1 name: ");
  player2 = prompt("Change player2 name: ");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;   
}

function rollTheDice() {
    setTimeout (function() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/" + "dice" + randomNumber2 + ".png");

    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML= "Draw";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML= player1 + " wins";
    } else {
        document.querySelector("h1").innerHTML= player2 + " wins";
    }

    }, 500);
}
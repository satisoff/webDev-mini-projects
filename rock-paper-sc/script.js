let rockBtn = document.querySelector('.rockBtn');
let paperBtn = document.querySelector('.paperBtn');
let scBtn = document.querySelector(".scBtn");

let resultText = document.querySelector(".result-text");
let userScoreText = document.querySelector(".user-score-text");
let botScoreText = document.querySelector(".bot-score-text");

//styling the score text
function userTxtStyle() {
    userScoreText.style.border = "2px solid #c62e65";
    botScoreText.style.border = 'none';
    resultText.style.backgroundColor = "green";
}
function boxTxtStyle() {
    botScoreText.style.border = "2px solid #c62e65";
    userScoreText.style.border = 'none';
    resultText.style.backgroundColor = "red";
}

//create a random bot move
function botMoveFinder() {
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber;    //0-R 1-P 2-S
}
let botMove = botMoveFinder();
let botScore = 0;

//extract the user's move
let userMove;
let userScore = 0;

//If Rock is chosen
rockBtn.addEventListener('click', () => {
    userMove = 0;
    let winner = checkWinner();
    userWin(userMove, winner);
})

//If Paper is chosen
paperBtn.addEventListener('click', () => {
    userMove = 1;
    let winner = checkWinner();
    userWin(userMove, winner);
})

//If Scissors is chosen
scBtn.addEventListener('click', () => {
    userMove = 2;
    let winner = checkWinner();
    userWin(userMove, winner);
})

//Decide the winner
//0-User 1-Bot 2-Tied
function checkWinner() {
    switch (userMove) {
        case 0:
            switch (botMove) {
                case 0:     //both rock
                    return 2;
                case 1:     //u-rock b-paper
                    return 1;
                case 2:     //u-rock b-scs
                    return 0;
                default:
                    return -1;
            }
        case 1:
            switch (botMove) {
                case 0:     //u-paper b-rock
                    return 0;
                case 1:     //both paper
                    return 2;
                case 2:     //u-paper b-scs
                    return 1;
                default:
                    return -2;
            }
        case 2:
            switch (botMove) {
                case 0:     //u-scs b-rock
                    return 1;
                case 1:     //u-scs b-paper
                    return 0;
                case 2:     //both scissors
                    return 2;
                default:
                    return -3;
            }
        default:
            return -4;
    }
}

function userWin(userMoveHere, winner) {
    if (winner==2) {
        resultText.innerText = "It's a Tie";
        resultText.style.backgroundColor = "#d63af9"
    }
    else if (winner==0) {       //user won
        switch (userMoveHere) {
            case 0:
                resultText.innerText = "Rock beats Scissors";
                break;
            case 1:
                resultText.innerText = "Paper beats Rock";
                break;
            case 2:
                resultText.innerText = "Scissors beat Paper";
                break;
        }
        userScore++;
        userScoreText.innerText=`You: ${userScore}`;
        userTxtStyle();
    }
    else {                      //user lose
        switch (userMoveHere) {
            case 0:
                resultText.innerText = "Paper beats Rock";
                break;
            case 1:
                resultText.innerText = "Scissors beat Paper";
                break;
            case 2:
                resultText.innerText = "Rock beats Scissors";
                break;
        }
        botScore++;
        botScoreText.innerText=`Bot: ${botScore}`;
        boxTxtStyle();
    }
    botMove = botMoveFinder();
}
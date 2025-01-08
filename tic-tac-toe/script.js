let boxes = [];
//selecting all boxes in an array
for (let i=1; i<=9; i++) {
    boxes.push(document.querySelector(`.cell-${i}`));
}


let newGame = document.querySelector(".new-game");

document.querySelector('.cross-icon').addEventListener('click', () => {
    newGame.style.display = 'none';
})

let newGamebtn = document.querySelector('.newGame');
newGamebtn.addEventListener('click', () => {
    boxes.forEach((val) => {
        val.innerText = "";
        val.disabled = false;
    })
    winner.innerText = "";
    turn='p1';
    newGame.style.display = 'none';
})

//selecting winner text
let winner = document.querySelector('.winPlayer');

//selecting reset button & resetting
let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    boxes.forEach((val) => {
        val.innerText = "";
        val.disabled = false;
    })
    winner.innerText = "";
    turn='p1';
    newGame.style.display = 'none';
})

//main logic
let turn = "p1";        //current turn p1=X

function taskDo() {
    if (this.innerText==='') {
        if (turn==='p1') {
            this.innerText = 'X';
            turn='p2';
        } else {
            this.innerText = 'O'
            turn='p1';
        }
    }

    if (checkWinner()=='p1') {
        winner.innerText ="Player 1 (X)\nWon";
        newGame.style.display = 'block';
        boxes.forEach((val) => {
           val.disabled = 'true';
        })
    } else if (checkWinner()==='p2') {
        winner.innerText ="Player 2 (O)\nWon";
        newGame.style.display = 'block';
        boxes.forEach((val) => {
            val.disabled = 'true';
        })
    } else {
        for (let val of boxes) {
            if (!val.innerText)
                return; 
        }
        newGame.style.display = 'block';
        winner.innerText = "Game Tied";
    }
}

boxes.forEach((val) => {
    val.addEventListener('click', taskDo);
})

function checkWinner() {
    if (turn=='p2') {
        if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[1].innerText && boxes[1].innerText===boxes[2].innerText) {
            return 'p1';
        }

        else if (boxes[3].innerText!=="" && boxes[3].innerText===boxes[4].innerText && boxes[4].innerText===boxes[5].innerText) {
            return 'p1';
        }

        else if (boxes[6].innerText!=="" && boxes[6].innerText===boxes[7].innerText && boxes[7].innerText===boxes[8].innerText) {
            return 'p1';
        }

        else if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[3].innerText && boxes[3].innerText===boxes[6].innerText) {
            return 'p1';
        }

        else if (boxes[1].innerText!=="" && boxes[1].innerText===boxes[4].innerText && boxes[4].innerText===boxes[7].innerText) {
            return 'p1';
        }

        else if (boxes[2].innerText!=="" && boxes[2].innerText===boxes[5].innerText && boxes[5].innerText===boxes[8].innerText) {
            return 'p1';
        }

        else if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[4].innerText && boxes[4].innerText===boxes[8].innerText) {
            return 'p1';
        }

        else if (boxes[2].innerText!=="" && boxes[2].innerText===boxes[4].innerText && boxes[4].innerText===boxes[6].innerText) {
            return 'p1';
        }
    }

    else {
        if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[1].innerText && boxes[1].innerText===boxes[2].innerText) {
            return 'p2';
        }

        else if (boxes[3].innerText!=="" && boxes[3].innerText===boxes[4].innerText && boxes[4].innerText===boxes[5].innerText) {
            return 'p2';
        }

        else if (boxes[6].innerText!=="" && boxes[6].innerText===boxes[7].innerText && boxes[7].innerText===boxes[8].innerText) {
            return 'p2';
        }

        else if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[3].innerText && boxes[3].innerText===boxes[6].innerText) {
            return 'p2';
        }

        else if (boxes[1].innerText!=="" && boxes[1].innerText===boxes[4].innerText && boxes[4].innerText===boxes[7].innerText) {
            return 'p2';
        }

        else if (boxes[2].innerText!=="" && boxes[2].innerText===boxes[5].innerText && boxes[5].innerText===boxes[8].innerText) {
            return 'p2';
        }

        else if (boxes[0].innerText!=="" && boxes[0].innerText===boxes[4].innerText && boxes[4].innerText===boxes[8].innerText) {
            return 'p2';
        }

        else if (boxes[2].innerText!=="" && boxes[2].innerText===boxes[4].innerText && boxes[4].innerText===boxes[6].innerText) {
            return 'p2';
        }
    }
}

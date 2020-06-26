//Result
const result_h2 = document.querySelector(".result h2");
//Score
let score_user = 0;
let score_enemy = 0;
const scoreUser_span = document.getElementById("score-user");
const scoreEnemy_span = document.getElementById("score-ai");
const scoreBoard = document.querySelector(".score");
//Botones:
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
//
function userChoiceToText(choice) {
    if (choice === 'r') return "La Piedra";
    if (choice == 's') return "Las Tijeras";
    return "El Papel";
}
function aiChoiceToText(choice) {
    if (choice === 'r') return "la Piedra";
    if (choice == 's') return "las Tijeras";
    return "el Papel";
}
function choiceToId(choice) {
    if (choice === 'p') return "paper";
    if (choice == 's') return "scissors";
    return "rock";
}
// Result Functions

function win(userChoice, ai_choice) {
    paintScore("w");
    score_user++;
    scoreUser_span.innerHTML = score_user;
    scoreEnemy_span.innerHTML = score_enemy;

    result_h2.innerHTML = `${userChoiceToText(userChoice)} vence a ${aiChoiceToText(ai_choice)}`;
    //Change color
    let idChoice = choiceToId(userChoice);
    document.getElementById(idChoice).classList.add("win");
    setTimeout(function () {
        document.getElementById(idChoice).classList.remove("win");
    }, 700);
}

function lose(userChoice, ai_choice) {
    paintScore('l');
    score_enemy++;
    scoreUser_span.innerHTML = score_user;
    scoreEnemy_span.innerHTML = score_enemy;
    result_h2.innerHTML = `${userChoiceToText(userChoice)} pierde contra ${aiChoiceToText(ai_choice)}`;
    let idChoice = choiceToId(userChoice);
    document.getElementById(idChoice).classList.add("lose");
    setTimeout(function () {
        document.getElementById(idChoice).classList.remove("lose");
    }, 700);
}
function draw(userChoice) {
    paintScore('d');
    scoreUser_span.innerHTML = score_user;
    scoreEnemy_span.innerHTML = score_enemy;
    result_h2.innerHTML = 'Los dos seleccionaron ' + aiChoiceToText(userChoice);
    let idChoice = choiceToId(userChoice);
    document.getElementById(idChoice).classList.add("draw");
    setTimeout(function () {
        document.getElementById(idChoice).classList.remove("draw");
    }, 700);
}
//Pintar el score
function paintScore(result) {
    let classStr;
    if (result === 'l') {//lose
        classStr = 'score-light-lose';
    } else if (result === 'w') {//win
        classStr = 'score-light-win';
    } else {//draw
        classStr = 'score-light-draw';
    }

    scoreBoard.classList.add(classStr);
    setTimeout(function () {
        scoreBoard.classList.remove(classStr);

    }, 700);
}

//
function play(userChoice) {

    let ia_choice = randomIa();
    switch (userChoice + ia_choice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, ia_choice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, ia_choice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice);
            break;

    }

}

function randomIa() {
    const choices = ['r', 's', 'p'];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

//
function game() {
    //Listeners
    paper.addEventListener("click", function () {
        play("p");
    });
    scissors.addEventListener("click", function () {
        play("s");
    });
    rock.addEventListener("click", function () {
        play("r");
    });
    //

}


game();


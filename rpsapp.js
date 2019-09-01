//set up our variables
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//returns a random choice using 1/3 probability of r p or s
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//converts the probability to word
function convertToWord(letter) {
    switch (letter) {
        case 'r':
            return "Rock";
            break;
        case 'p':
            return "Paper";
            break;
        case 's':
            return "Scissor";
            break;
        default:
            return "error";
            break;
    }
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++; //if we win increment user score
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    //display you win in html
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++; //if user loses, increase computer score
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    //if draw, then we print 'draw'
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Its a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

function game(userChoice) {
    //this function takes user and computer choice as input and based on that,
    //user or computer wins, loses, or draws
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "rp":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "pr":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    //main
    rock_div.addEventListener('click', function() { game('r'); })
    paper_div.addEventListener('click', function() { game('p'); })
    scissor_div.addEventListener('click', function() { game('s'); })
}

main();

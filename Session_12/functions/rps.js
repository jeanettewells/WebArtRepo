function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return 'rock';

    } else if (num == 1) {
        return 'paper';

    } else if (num == 2) {
        return 'scissors';
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function determineWinner(userAnswer, computerAnswer) { // arguments only apply to specific function
    if (userAnswer == 'bomb') {
        return 'the human won.. but at what cost?'
    }
    
    if (userAnswer == computerAnswer) {
        return 'the game was a tie';
    }

    if (userAnswer == 'rock') {
        if (computerAnswer == 'paper') {
            return 'the computer won!'
        } else {
            return 'the human won!'
        }
    }

    if (userAnswer == 'paper') {
        if (computerAnswer == 'scissors') {
            return 'the computer won!'
        } else {
            return 'the human won!'
        }
    }

    if (userAnswer == 'scissors') {
        if (computerAnswer == 'rock') {
            return 'the computer won!'
        } else {
            return 'the human won!'
        }
    } else {return 'not an option.. cheater!!'}
}

let enterButton = document.querySelector('.enter');
enterButton.addEventListener('click', playGame);

function playGame() {
    let userInputField = document.querySelector('#input');
    let userChoice = userInputField.value;
    let computerChoice = getComputerChoice()
    console.log('human threw ' + userChoice);
    console.log('computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))

    let output = document.querySelector('#output')
    output.innerHTML = '';
    output.innerHTML += '<p>human threw ' + userChoice + '</p>';
    output.innerHTML += '<p>computer threw ' + computerChoice + '</p>';
    output.innerHTML += '<p id ="winner">' + determineWinner(userChoice, computerChoice) + '</p>';


}

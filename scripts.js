function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection, scores) {

    console.log(`Player has chosen ${playerSelection} and the computer has chosen ${computerSelection}.`)
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie."); 
        return scores; 
    }

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            scores['Computer'] += 1;
            console.log('You Lose! Paper beats Rock');
        }
        else {
            scores['Player'] += 1;
            console.log('You Win! Rock beats Scissors');
        } 
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            scores['Player'] += 1;
            console.log('You Win! Paper beats Rock');
        }
        else {
            scores['Computer'] += 1;
            console.log('You Lose! Scissors beats Paper');
        }
    }
    else {
        if (computerSelection === 'Rock') {
            scores['Computer'] += 1;
            console.log('You Lose! Rock beats Scissors');
        }
        else {
            scores['Player'] += 1;
            console.log('You Win! Scissors beats Paper');
        }
    }

    return scores; 
}

function game() {

    let scores = {
        'Player': 0, 
        'Computer': 0
    };

    const buttons = document.querySelectorAll('button'); 
    const playerScore = document.querySelector('.playerScore h3'); 
    const computerScore = document.querySelector('.computerScore h3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            scores = playRound(button.innerText, getComputerChoice(), scores);
            playerScore.innerText = scores['Player']; 
            computerScore.innerText = scores['Computer'];
        })
    }) 
}

game(); 
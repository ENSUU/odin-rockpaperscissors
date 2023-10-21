function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection, scores) {

    const roundResults = document.querySelector('body > div.container > div.roundResult > h2'); 
    roundResults.innerText = `Player chose ${playerSelection}. CPU chose ${computerSelection}.`
    
    const roundWinner = document.querySelector("body > div.container > div.roundResult > h3"); 
    
    if (playerSelection === computerSelection) {
        roundWinner.innerText = "It's a tie. Go again!"; 
        return scores; 
    }

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            scores['Computer'] += 1;
            roundWinner.innerText = 'You Lose!';
        }
        else {
            scores['Player'] += 1;
            roundWinner.innerText = 'You Win!';
        } 
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            scores['Player'] += 1;
            roundWinner.innerText = 'You Win!';
        }
        else {
            scores['Computer'] += 1;
            roundWinner.innerText= 'You Lose!';
        }
    }
    else {
        if (computerSelection === 'Rock') {
            scores['Computer'] += 1;
            roundWinner.innerText = 'You Lose!';
        }
        else {
            scores['Player'] += 1;
            roundWinner.innerText = 'You Win!';
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

            if (scores['Player'] === 5 || scores['Computer'] === 5) {
                const controls = document.querySelector('.controls'); 
                controls.remove(); 
        
                const roundResults = document.querySelector('body > div.container > div.roundResult > h2'); 
                let winner = scores['Player'] === 5 ? 'Player' : 'CPU'; 
                roundResults.innerText = `${winner} wins the game!`; 

                const roundWinner = document.querySelector("body > div.container > div.roundResult > h3");
                roundWinner.innerText = "";
            }
        })
    }) 

}

game(); 
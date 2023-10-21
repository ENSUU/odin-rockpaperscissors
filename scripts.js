// Generate the computer's choice randomly.
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]
}

// Handles the logic of who won the round based on rock-paper-scissor rules.
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

// Starts the game up. 
function game() {
    // Initializing a score of 0 for both the player and CPU.
    let scores = {
        'Player': 0, 
        'Computer': 0
    };

    // Selecting the DOM elements for the options, player score, and CPU score.
    const buttons = document.querySelectorAll('button'); 
    const playerScore = document.querySelector('.playerScore h3'); 
    const computerScore = document.querySelector('.computerScore h3');

    // For each button option, add a click event listener which calls playRound function when clicked.
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            scores = playRound(button.innerText, getComputerChoice(), scores);
            playerScore.innerText = scores['Player']; 
            computerScore.innerText = scores['Computer'];

            // When either the player or CPU reaches a score of 5, stop the game. 
            if (scores['Player'] === 5 || scores['Computer'] === 5) {
                const controls = document.querySelector('.controls'); 
                controls.remove(); 
                
                // Editing the text under the options to display the winner. 
                const roundResults = document.querySelector('body > div.container > div.roundResult > h2'); 
                let winner = scores['Player'] === 5 ? 'Player' : 'CPU'; 
                roundResults.innerText = `${winner} wins the game!`; 

                const roundWinner = document.querySelector("body > div.container > div.roundResult > h3");
                roundWinner.innerText = "";
                
                // Adding a "Play Again" button once the score reaches 5 for either the CPU or Player.
                const resetButton = document.createElement('button'); 
                resetButton.textContent = 'Play Again';
                resetButton.style.cssText = "padding: 1rem 0;";
                resetButton.style.fontWeight = "bold";

                resetButton.addEventListener('click', () => {
                    location.reload(); 
                })

                document.querySelector('.container').appendChild(resetButton); 
            }
        })
    }) 

}

game(); 
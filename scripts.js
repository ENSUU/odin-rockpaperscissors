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

    const numberOfGames = parseInt(prompt("Enter the number of rounds you would like to play: ")); 

    for (let i = 1; i < numberOfGames + 1; i++) {
        let playerChoice = prompt('Enter your choice (Rock, Paper, or Scissors): '); 
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1); 
        while (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
            playerChoice = prompt('Invalid Choice. Please enter Rock, Paper, or Scissors: '); 
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1); 
        }

        console.log(`------------------- Round ${i} -------------------`); 
        scores = playRound(playerChoice, getComputerChoice(), scores); 

        console.log(`Player Wins: ${scores['Player']} | Computer Wins: ${scores['Computer']}`); 
    }

    console.log(`------------------- Game Results -------------------`);
    if (scores['Player'] === scores['Computer']){
        console.log("It's a Tie!"); 
    }
    else if (scores['Player'] > scores['Computer']){
        console.log('You Win!'); 
    }
    else {
        console.log('Computer Wins!');
    }
         
}

game(); 
        let playerChoice = '';
        let pScore = 0;
        let cScore = 0;

        const btn = document.querySelectorAll('button');
        const container = document.querySelector('#results');
        const round = document.createElement('p');
        const winner = document.createElement('h2');
        const playerScore = document.querySelector('#playerScore')
        const computerScore = document.querySelector('#computerScore')
        winner.classList.add('winner');
        round.classList.add('round');
        container.appendChild(round);

        btn.forEach((button) => {
            button.addEventListener('click', () => getPlayerChoice(button.textContent));
        });

        function getComputerChoice() {
            let choices = ['Rock', 'Paper', 'Scissors'];
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function getPlayerChoice(choice) {
            playerChoice = choice;
            game();
        }

        function game() {
            if (pScore == 5 || cScore == 5) {
                if (pScore > cScore) {
                    winner.textContent = "You won the game!!!";
                }
                else winner.textContent = "You lost the game :(";
                container.appendChild(winner);
            }
            else {
                round.textContent = (playRound(playerChoice, getComputerChoice()));
            }
        }

        function playRound(playerChoice, computerChoice) {
            if (playerChoice == computerChoice) {
                return 'Tie! Play again!';
            } else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || 
                        playerChoice == 'Paper' && computerChoice == 'Rock' || 
                        playerChoice == 'Scissors' && computerChoice == 'Paper') {
                pScore++;
                playerScore.textContent = 'Player: ' + pScore;
                return 'You won this round! ' + playerChoice + ' beats ' + computerChoice;
            }
            else {
                cScore++;
                computerScore.textContent = 'Computer: ' + cScore;            
                return 'You lost this round! ' + computerChoice + ' beats ' + playerChoice;
            }
        }
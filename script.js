let playerChoice = '';
        let playerScore = 0;
        let computerScore = 0;
        let count = 0;

        // getInnerText not working
        // need to add uipdate to player score

        const btn = document.querySelectorAll('button');
        btn.forEach((button) => {
            button.addEventListener('click', getPlayerChoice(button.innerText()))
        });

        const container = document.querySelector('#results');

        const round = document.createElement('p');
        round.classList.add('round');
        round.appendChild(container);

        function getComputerChoice() {
            let choices = ['Rock', 'Paper', 'Scissors'];
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function getPlayerChoice(choice) {
            playerChoice = choice;
            game();
        }

        function game() {
            if (playerScore == 5 || computerScore == 5) {
                const winner = document.createElement('h2');
                winner.classList.add('winner');
                if (playerScore > computerScore) {
                    winner.textContent = "You won the game!!!";
                }
                else winner.textContent = "You lost the game :(";
                container.appendChild(winner);
            }
            else {
                round.textContent(playRound(playerChoice, getComputerChoice()));
            }
        }

        function playRound(playerChoice, computerChoice) {
            if (playerChoice == computerChoice) {
                return 'Tie! Play again!';
            } else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || 
                        playerChoice == 'Paper' && computerChoice == 'Rock' || 
                        playerChoice == 'Scissors' && computerChoice == 'Paper') {
                playerScore++;
                count++
                return 'You won this round! ' + playerChoice + ' beats ' + computerChoice;
            }
            else {
                computerScore++;
                count++
                return 'You lost this round! ' + computerChoice + ' beats ' + playerChoice;
            }
        }
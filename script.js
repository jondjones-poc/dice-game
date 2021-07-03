const firstDice = document.getElementById('first-dice');
const secondDice = document.getElementById('second-dice');
const winnerEl = document.getElementById('winner-display');
const startButton = document.getElementById('start-game');

const calculateWinner = (playerOneThrow, playerTwoThrow) => {
    let winingMessage = 'Draw';

    if (playerOneThrow > playerTwoThrow) winingMessage = "Player One Wins"
    if (playerTwoThrow > playerOneThrow) winingMessage = "Player Two Wins"

    return winingMessage
}

const playGame = () => {
    const playerOneThrow = Math.floor(Math.random() * 6) + 1;
    const playerTwoThrow  = Math.floor(Math.random() * 6) + 1;
    
    const playerOneDiceImageUrl = `img/dice${playerOneThrow}.png`;
    const playerTwoDiceImageUrl = `img/dice${playerTwoThrow}.png`;
    
    firstDice.setAttribute('src', playerOneDiceImageUrl);
    secondDice.setAttribute('src', playerTwoDiceImageUrl);

    winnerEl.innerHTML = calculateWinner(playerOneThrow, playerTwoThrow);
    
}


startButton.addEventListener('click', () => {
    playGame();
})


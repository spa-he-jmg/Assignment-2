import { Game } from "./Game.js";
import { router } from "./Router.js";

export function startGame(event) {
    // Route to game page
    router('game');

    // Init game
    const currentGame = new Game();

    // Get gameboard
    const gameBoard = document.getElementById('gameboard');

    // Create fragment for gameboard
    const boardFragment = document.createDocumentFragment();

    // Add handler for turns
    gameBoard.addEventListener('click', handleTurn(currentGame));


    // Create grid
    for(let x = 0; x < 3; x++) {
        // Create row
        const row = document.createElement('div');
        row.classList.add('row');

        for(let y = 0; y < 3; y++) {
            // Create cell
            const cell = document.createElement('button');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;

            // Append cell
            row.appendChild(cell);
        }
        // Append row
        boardFragment.appendChild(row);
    }

    // Append fragment to gameboard
    gameBoard.appendChild(boardFragment);
}

function handleTurn(game) {
    function curriedHandleTurn(event) {
        if (event.target.classList.contains('cell')) {
            // Get X
            const cellX = event.target.dataset.x;

            // Get Y
            const cellY = event.target.dataset.y;

            // Submit turn
            const turnResult = game.turn(cellX, cellY);

            // Check if turn was valid
            if (turnResult) {

                // Mark cell
                event.target.textContent = game.opponent;
                event.target.setAttribute("disabled", true);
                event.target.dataset.player = game.opponent;

                // Check for draw or win
                if (turnResult === 'Draw' || (turnResult === 'X' || turnResult === 'O')) {

                    const gameBoard = document.getElementById('gameboard');
                    const playerResult = document.getElementById('player-result');
                    const playerTurn = document.getElementById('player-turn');
                    
                    // Update results
                    playerResult.textContent = turnResult === 'Draw' ? '' : game.player;
                    playerResult.dataset.player = game.player;
                    document.getElementById('result-message').textContent = turnResult === 'Draw' ? 'Draw!' : ' wins!';
                    
                    // Route to result page
                    router('game-over');

                    // Reset turn info
                    playerTurn.textContent = 'X';
                    playerTurn.dataset.player = 'X';
                    
                    // Reset game board
                    gameBoard.innerHTML = '';
                    gameBoard.removeEventListener('click', curriedHandleTurn);
                }
                else {
                    
                    const playerTurn = document.getElementById('player-turn');

                    // Update turn info
                    playerTurn.textContent = game.player;
                    playerTurn.dataset.player = game.player;
                }
            }
    }
    }

    return curriedHandleTurn;
}
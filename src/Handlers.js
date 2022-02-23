import { Game } from "./Game";
import { router } from "./Router";

export function startGame(event) {
    if (event.target.id === 'start-pvp') {
        // Route to game page
        router('game');

        // Init game
        const currentGame = new Game();

        const gameBoard = document.getElementById('gameboard');

        // Add handler for turns
        gameBoard.addEventListener('click', handleTurn(currentGame));

        // Add handler for ending game
        document.getElementById('end-game').addEventListener('click', (event) => {

            // Remove turn handler
           gameBoard.removeEventListener('click', handleTurn);

            // Remove children from gameboard
            gameBoard.innerHTML = '';
        });
    }
}

function handleTurn(event, game) {
    // Get X
    const cellX = event.target.dataset.x;

    // Get Y
    const cellY = event.target.dataset.y;

    
}
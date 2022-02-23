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

function handleTurn(game) {
    function curriedHandleTurn(event) {
        // Get X
        const cellX = event.target.datset.x;

        // Get Y
        const cellY = event.target.dataset.y;

        const turnResult = game.turn(cellX, cellY);

        if (turnResult) {
            event.target.textContent = game.player;
            event.target.setAttribute("disabled", true);

            if (turnResult === '') {
                
            }
        }
    }
}
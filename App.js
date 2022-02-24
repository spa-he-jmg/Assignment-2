import { startGame } from "./src/Handlers.js";
import { router } from "./src/Router.js";

// Add handler to start game
document.getElementById('start-game').addEventListener('click', startGame);

// Add handler to restart game
document.getElementById('restart-game').addEventListener('click', startGame);

// Add handler to end game and go back to menu
document.getElementById('end-game').addEventListener('click', () => {
    router();
})
export function router(path) {

    // Get routes
    const menu = document.getElementById('menu-wrapper');
    const game = document.getElementById('game-wrapper');
    const results = document.getElementById('results-wrapper');

    // Display route
    switch (path) {
        case 'game':
            menu.classList.remove('active');
            results.classList.remove('active');
            game.classList.add('active');
            break;
        case 'game-over':
            game.classList.remove('active');
            menu.classList.remove('active');
            results.classList.add('active');
            break;
        default:
            game.classList.remove('active');
            results.classList.remove('active');
            menu.classList.add('active');
            break;
    }
}
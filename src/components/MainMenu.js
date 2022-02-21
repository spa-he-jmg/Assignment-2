import { router } from "../Router"

export function MainMenu() {

    const element = (`<div id="menu-wrapper">
    <h1 id="title">Tic Tac Toe</h1>
    <ul id="menu">
        <li class="menu-item">
            <button class="menu-btn" onclick>Start Game</button>
        </li>
    </ul>
    </div>`)

    const menuWrapper = document.createElement('div');

    menuWrapper.id = 'menu-wrapper';

    const title = document.createElement('h1');
    
    title.id = 'title';

    const menu = document.createElement('div');

    menu.id = 'menu';

    

    

    const mount = () => {

    }
}
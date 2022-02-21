export class Game {
    constructor () {

        // Track scores per round
        this.scores = {
            'X': 0,
            'Y': 0
        }

        // Track turn
        this.turns = 9;

        // Track current player
        this.player = false;
        this.opponent = false;

        // Track marked cells
        this.marked = new Set();

        // Track count for players
        this.gridVectors = new Map([['x0', 0], ['x1', 0], ['x2', 0], ['y0', 0], ['y1', 0], ['y2', 0], ['crossA', 0], ['crossB', 0]]);
    }

    turn(x, y) {
        // Check if there is a draw

        // Get cell key
        let cell = `${x}${y}`;

        // If cell is un-marked
        if (this.marked.has(cell)) {
            return false;
        }

        // Mark cell
        this.marked.add(cell);

        // Update count
        return this.updatecount(x, y, cell);
       
    }

    updatecount(x, y, cell) {
        
        const spaceVectors = [`x${x}`, `y${y}`, 'crossA', 'crossB'];

        for (let vector of spaceVectors) {

            // Check if the current vector is dead
            if (this.gridVectors.get(vector) === 'dead') {
                continue;
            }

            // Check the cross vector
            if ((vector === 'crossA' && (cell !== '00' && cell !== '11' && cell !== '22')) || (vector ==='crossB' && (cell !== '02' && cell !== '11' && cell !== '20'))) {
                continue;
            }

            // Check if opponent has current vector
            if ((this.player === 'X' && this.gridVectors.get(vector) > 0) || (this.player === 'O' && this.gridVectors.get(vector) < 0)) {
                 this.gridVectors.set(vector, 'dead');
                 continue;
            }

            // Update count for vector
            let count = this.gridVectors.get(vector);
            let playerCount = this.player === 'X' ? -1 : 1;
            
            count += playerCount;
            this.gridVectors.set(vector, count);
            
            
            if (count !== -3 && count !== 3) {
                continue;
            }

            const winner = count === -3 ? 'X' : 'O';

            this.scores[winner] += 1;

            return winner;

        }

        this.turns--;
        
        if (!this.turns) {
            return 'Draw';    
        }
        
        let newOpp = this.player;
        this.player = this.opponent;
        this.opponent = newOpp;
        return false;
    }

    restartGame() {
        this.turns = 9;

        // Track current player
        this.player = false;
        this.opponent = false;

        // Track marked cells
        this.marked = new Set();

        // Track count for players
        this.gridVectors = new Map([['x0', 0], ['x1', 0], ['x2', 0], ['y0', 0], ['y1', 0], ['y2', 0], ['crossA', 0], ['crossB', 0]]);
    }

    setPlayer(player) {
        this.player = player;
        this.opponent = player === 'X' ? 'O' : 'X';
    }


}
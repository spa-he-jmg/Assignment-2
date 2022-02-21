# Assignment-2
Tic-Tac-Toe

* Quick note for the win check, keep track of the column / row / cross-axis  via a map and how many more spaces need to be checked for a win.

    Example: If we have a standard grid and X marks position (0, 0) for the first turn of the game then player X has 'column 0', 'row 0', 'cross-axis' added to their direction map. These keep track of how many positions in a column, row, or cross axis are taken by the player. If the opponent marks a position in any of these tracked directions then that direction is removed from the score map. For example if player X has 'col-0' in their score map and player O marks a spot in 'col-0' then it will be removed from player X's score map and will not be added to player O's.
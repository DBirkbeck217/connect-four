1. 7x6 grid on the page.
    -Use for loops to make grid
2. Player can add discs to the board.
    -Create Player 1 as red
    -Create Player 2 as black
    -Keep track of Player moves
3. Disc color alternates between players.
      -Change color of circle when player clicks on column (click handler)
      -How will you make the disks stack?
4. Game checks for wins vertically, horizontaly, and diagonally, and lets user know when the game ends in a Red Win, a Black Win, or a Tie.
    -Create Function that displays when a player wins




-------------------------



In Connect-Four, one player is assigned Red and the other player is assigned Black. Players alternate inserting their pieces into one of the 7 columns of a 7x6 grid. The first player to get four of their pieces in a row (horizontal, vertical, or diagonal), wins.
How to set up a 7 x 6 grid?--perhaps display grid in Css? or Table in html??
2 Players who's turn is it? ---maybe a variable to kep track of who's turn is it.
how to put my checker onto my grid??---- addEventListener???
how to check for all possibilities of a winning solution on grid? ---- nested Array?? conditionals?????
12:01
how to keep track of which cells have been filled??



---------------------------



1# How i can crate a red and black disc?
    1-this could be done in the html and css
    2-creat a div that called RED in a div and followed by another div id=disc
2# HOW i can create 7 x 6 grid?
    1-this could be done in the html and css
    2 Use <table> <tr></tr></table>
3# How to create check winner function?
    1- by using the console.log(getElementById()lastElementChild)



-----------------



1.Display game items
    1. red and black disc 
    2. 7x6 grid 
2.Provide player a way to to place disc in spot of their choosing
    1. allow disc to be stacked on top of each other 
    2. assign click hanlders for each row/column
3.Check for winning condition
    1. checks if 4 in a row
        1.horizontally, vertically, upward, downward, diagonally 




----------------------




# Program Plan
​
1.  Read the requirements document in detail.
    * Take notes of things you'll need to do
    * Write down any questions
2.  Get the answers to your questions!
3.  Make a development plan
    * Describe the entire behavior of your program in 3 (or at most 4) steps
    * Break down each step into 3 (or 4) steps
    * Repeat until each step is obvious how to code it
4.  Write the code!
​
​
# Notes
1.  Connect 4 in a row (horizontal, vertical, or diagonal)
2.  Once all cells are filled and no connect 4 is achieved, then the game ends in a tie.
​
# Questions
1.  How do I check upward- or downward-sloping diagonal?
2.  How do I keep track of whose turn it is?
    1.  Perhaps in an object or array, the same as the tower of hanoi. 
​
# Development Plan
1.  Display a red or black disc.
    1.  A div with border radius of 50%
2.  Stack red and black discs in a column using flex box.
    1.  Put divs into a container that has grid displayed
3.  Display a full board consisting of 7 columns.
    1.  Use grid or flex to make 7x6 grid
        1.  Make 7 divs containing 6 boxes that stack
4.  Set a click handler for each column that adds an additional disc.
    1.  Click handler function
        1.  Function chooses the last child of the column and adds a disc if there are no discs in that child
5.  Toggle the color of each successive disc added.
    1.  Store the color in an object or array that changes each time click handler function runs
6.  Keep track of what color disc is at each position on the board. 
    1.  Produce a for loop that makes the grid.
    2.  Give each column and cell a 'data-column' & 'data-cell' position.
    3.  Look at the child of those positions and see what color disc is inside.
7.  Once a column is full, don't allow any more discs to be added.
    1.  Create a for loop with an if statement to check if the all cells have children.
    2.  If so, then it's a tie.
8.  Check four-in-a-row: vertically, horizontally and either upwards- or downward-sloping diagonal.



-------------



Questions:
How will the timer work?  When will it start/stop?  Is it to much of a pain to add?

Development Plan:
1. Create a 7x6 game board with 2 colors of discs.
  1. Square game board with a grid of 7x6 equally sized circles.
    1. Using a table to define each row/col.
  2. Create 2 graphic disc's
    1. Create a playerColor array and fill the array with p1/p2
      2. Call the Player color variable and input a color string.
2. Allow 2 players to play verse each other.
  1. Assign 2 players
    1. For each turn, activate a player and deactivate the other.
      2. As turns change so should the colors set up in 1,2
  2. Enforce game rules for placing disc's
    1. Disc's must be placed within the table to drop.
      2. Only one disc per "slot"
        3. Each player only gets 1 disc per turn.
  3. Allow winning condition.
    1. Player "wins" the game by lining up 4 of their disc's in a row.
      1. 4 in a row Horizontal, Vertical,or Diagonal wins.
3. End game, Start over.
  1. Once winning condition is met "alert" the winners name.
    1. alert("Player X Wins!")
  2. Provide an option to play again.
    1. Add a button that refreshes just the table, to allow a new match to start.



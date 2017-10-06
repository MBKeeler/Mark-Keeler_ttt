## Mark-Keeler.ttt_project README

## Project On GitHub
https://github.com/MBKeeler/Mark-Keeler_ttt

## Game page available at:
https://mbkeeler.github.io/Mark-Keeler_ttt/

Galactic Tic Tac Toe is an exciting turn based tactical game pitting you against
another player.  Players alternate turns by conquering each of nine sectors in
the contested quadrant.  Players who are able to establish a cohesive supply
line of three sectors within the quadrant will be deemed the winner.

## Known Issues
 As of v.1.1 the following know issues exist
-- the required networking features to save a game state is unfinished
-- game tie code has not be implemented
-- console.log lines left in for the network sign-in and error handling

## Technologies Used

-- html
-- CSS
-- JavaScript
-- jQuery
-- Bootstrap

##  About the Game development
Several versions of Tic Tac Toe exist.  Although some inspiration was taken from
several sources, the code used in this game was coded by the game author. The
majority of the time was spent working smaller methods that would handle one
specific job.  Tying those methods together in the correct sequence proved to be
a challenge.

## Wire Frames

https://imgur.com/a/8sFhq


## Basic User Stories

	1.	As a game player, I want to be able to sign up for an account that will keep a record of my games and which will persist over time.
	2.	As a game player I want to be able to sign out and sign back in to my game account so that I can retrieve my game data.
	3.	As a game player I want a graphical interface where my 'moves' are recorded and tracked by a simple mouse click into one of the available tic tac toe boxes so that I may enjoy the game without having to enter command line based moves.
	4.	As a game player I want to be able to use the UI to reset and play the game again. I expect that when I reset to play the game, my player data is saved and retrievable on my next login.
	5.	As a game player I want to see the number of games that I have won so that I may gauge my proficiency.
	6.	As a game player I want to be able to resize my viewport or use a mobile device with a smaller screen resolution sot that the game maintains a satisfactory level of playability when I change devices.

## Initial Engine Concept:

Start Game with Empty Board divided into 9 sectors (cells).  Each cell will have it’s own id to correspond with the array
	Gameboard array is set to be filled with 9 ‘*

	Start with player ‘X’
		Player X selects ‘sector’ (game cell)
			Game logic checks gameBoard array
				check to see if there is any ‘x’ or ‘o’ in the cell selected
					if yes then see Sector Occupied below
					if no then
				check to see if there is a ‘win’ condition
					if yes then see Win Condition below					
					if no then 	
				check to see if the array is filled
					if yes then see Game Tie / No sectors left to play
					if no then
			‘X’ image is put in game cell
			‘x’ is inserted in the gameBoard array at the appropriate index and
      replaces the existing ‘* - requires true from occupiedSector()
			Game is ‘saved’ to server
			Game turn goes to player ‘O’

	Turn reverts to player ‘0’
		Player O selects ‘sector’ (game cell)
			Game logic checks gameBoard array
				check to see if there is any ‘x’ or ‘o’ in the cell selected
					if yes then see Sector Occupied below
					if no then
				check to see if there is a ‘win’ condition
					if yes then see Win Condition below					
					if no then 	
				check to see if the array is filled
					if yes then see Game Tie / No sectors left to play
					if no then
			‘O’ image is put in game cell
			‘o is inserted in the gameBoard array at the appropriate index and
      replaces the existing ‘* - requires true from occupiedSector()
			Game is ‘saved’ to server
			Game turn goes to player ‘X’


	Sector occupied
		alert that the sector is occupied and to select another

	Game Tie / No sectors left to play
		alert that the game is a tie
		save game data to server
		iterate game count
		offer to play again

	Win Condition
		alert that the game was won by <player>
		save game data to server
		iterate win count for <player>
		offer to play again

	Play again / Game start
		Reset the board to default
		Reset the gameBoard array to be filled with ‘*

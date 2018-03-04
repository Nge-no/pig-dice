# <p align="center">Pig Dice app</p>

#### Web application that allows two players to play pig dice.

### Contributors: Brian Ng'eno

## Description

This is a simple pig dice game app.

### Instructions:

1. Go to [website](https://nge-no.github.io/pig-dice/).
2. Enter player names in respective sections.
3. Click 'Play'.
4. Click 'roll' to roll die.
5. Click 'hold' to retain accumulated round points and add to total score before passing to next player.
6. Click 'new game' to reset game.

### Game rules:

1. When a player rolls the die and gets 1,all previously accumulated points are nullified and the other player takes a turn.
2. If 1 is not gotten after a roll,the player rolling continues until he/she either rolls a 1 or clicks 'hold' to pass the turn to the other player.
3. First player to 100 points wins.

### Specifications:

1. The program will generate a random number from 0 t0 6.
  - **Input**: Click 'Roll'
  - **Output**: Either 1,2,3,4,5 or 6.
2. The program will alert player when the die gives 1 after a roll and give 0 points for that round.
  - **Input**: 1
  - **Output**: 'Player Name',you have rolled a 1! Next player's turn!
3. The program will add to and update the round score as long as 1 is not rolled.
  - **Input**: 2,3,4,5,6
  - **Output**: Current round score plus die roll score.
4. The program will update total score, reset round score to 0 and prompt for player's to switch turns.
  - **Input**: 'Hold'
  - **Output**: Next player's turn!
5. The program will display appropriate pictures of die faces according to player's roll points.
  - **Input**: 6
  - **Output**: ![6](../img/die_face_6.png)
6. The program will alert player of victory if 100 points are accumulated and prompt him/her to begin a new game.
  - **Input**: Total points = 100
  - **Output**: 'Player Name', you have won! 'Players total points'.

## Known bugs:
1. Player can continue to play even after being prompted to switch turns.
  **Suggested fix** Adhere to outlined rules of the game.

## Technologies used:
1. HTML
2. CSS and Bootstrap
3. Javascript and jQuery
## Contacts
Feel free to reach out if you have any questions,ideas or contributions.
Also feel free to contribute to my code.
Number:**0773411584**
Email:**ngenobrian7@gmail.com**

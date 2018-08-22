# Mastermind Game

This is my final project for DigitalCrafts 2018 flex cohort coding boot camp.  This app is a replica of the board game Mastermind.  Mastermind or Master Mind is a code-breaking game for two players.  More info can be found here: <https://en.wikipedia.org/wiki/Mastermind_(board_game)>

## Live Demo

mastermindgame.jladdy.org

### Video of App (Optional)

### Contents

```javascript
- App Features
  - Built With (Dependencies)
  - Versions (MVP)
  - Stretch Goals
- Challenges and Solutions
- Items to Implement/Open Issues
- Screenshots
- GitHub Link
- Code Examples
- Testing (library like chai or mocha/examples)
```

### App Features

#### Built With (Dependencies)

- React (create-react-app)
- React-Router (npm install react-router-dom)
- Redux (npm install react-redux)
- JSX
- CSS3

#### Version 1.0 - DC Final Project (MVP)

This is a basic version of the Mastermind game.  A random sequence is generated by the app.  It's up to the player to select one of 4 different peg colors and place them into a sequence.  The player can then check their sequence and markers are placed to assist in 'cracking the code'.

Peg Colors: Red, Yellow, Blue, Green
Marker Colors: Black, White, Gray(default)

Black markers indicate the player's sequence has a peg of the correct color in the correct location.  White markers indicate the player's sequence has a page of the correct color but not in the correct location.  A Gray marker indicates that the player has neither the correct color of the correct location.

#### Stretch Goals

- Allow for Multiplayer
  - Mode 1: User 1 selects sequence and User 2 attempts to solve
  - Mode 2: User 1 and User 2 compete to see who can solve in the least number of steps
- Single  Player (Hard Mode):
  - Not only color pegs, but different colored shapes. So you have to guess the color and the shape to get right.
- Can I make the IntroScreen text animate from Danh Hong font to English and transition back on a loop?
- Display the Solutions PegRow and the Players last Sequence in the EndGameModal Screen win or lose.
- Save Player Name and Modal State to Local Storage
- Track wins and loses

### Challenges & Solutions

- Maintaining responsiveness when rendering the app on different device screen sizes.  
- Setting color template state, using local props.  What I wound up doing is trying to set the color of "this" button.  Instead of changing the color of another button.  SOLUTION: Move the color flag into the Redux Store.
- Changing the background color of a button on a click. I approached this from a purely UI standpoint trying to affect the background color through React with a 'gamestate'.  This cause muliple issues that ultimately never changed the color.  However, after introducting a 'gameboard' state into my redux store and reading the background colors from that state, the buttons almost immediate started rendering the correct color.

### Items to Implement/Open Issues

- Potentially change the modal to a full screen modal on mobile screens
- Tutorial/Instruction Modals/Screens

### Screenshots

### GitHub Link

<https://github.com/laddeyboy/mastermind>

### Code Examples

### Testing (library like chai or mocha/examples)
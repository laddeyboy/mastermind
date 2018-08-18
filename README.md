# mastermind

## Live Demo

### Video of App (Optional)

### Contents

```javascript
- App functionality (what it is/does)
- Built With (what languages/libraries were used)
- Challenges & Solutions
- MVP
- Stretch Goals
- Screenshots
- GitHub Link
- Code Examples
- Testing (library like chai or mocha/examples)
```

### App functionality (what it is/does)

-Mastermind or Master Mind is a code-breaking game for two players.  More info can be found here: <https://en.wikipedia.org/wiki/Mastermind_(board_game)>

Peg Colors: Red, Yellow, Blue, Green, Gray(default)
Marker Colors: Black, White, Gray(default)

Only a single click on a marker square to prevent accidentaly "double click" and thus removing one turn.  Maybe a turn flag for each marker state?

### Built With (what languages/libraries were used)

- React
- Redux
- CSS3

### Challenges & Solutions

1) Stylings when switching between full screen and mobile screens is still an issue.
2) Setting color template state, using local props.  What I wound up doing is trying to set the color of "this" button.  Instead of changing the color of another button.  SOLUTION: Move the color flag into the Redux Store.
3) Changing the background color of a button on a click. I approached this from a purely UI standpoint trying to affect the background color through React with a 'gamestate'.  This cause muliple issues that ultimately never changed the color.  However, after introducting a 'gameboard' state into my redux store and reading the background colors from that state, the buttons almost immediate started rendering the correct color.

### Functionality/Items to Implement

1) Reset the isMainModalOpen flag to true when navigating back to the main page '/'
2) Potentially change the modal to a full screen modal on mobile screens
3) Tutorial/Instruction Modals/Screens

### MVP

-The minimum functionality will be to play a single player version of the mastermind game.  Versus an 'AI' or dynamically generated random sequence.  

### Stretch Goals

- Allow for Multiplayer
--Mode 1: User 1 selects sequence and User 2 attempts to solve
--Mode 2: User 1 and User 2 compete to see who can solve in the least number of steps
-Single  Player (Hard Mode):
--Not only color pegs, but different colored shapes. So you have to guess the color and the shape to get right.
-Can I make the IntroScreen text animate from Danh Hong font to English and transition back on a loop?

### Screenshots

### GitHub Link

<https://github.com/laddeyboy/mastermind>

### Code Examples

### Testing (library like chai or mocha/examples)
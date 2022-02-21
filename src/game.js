import Gameboard from './Gameboard';
import Player from './Player';
import Ship from './Ship';
import display from './display';
import './style.css';

const gameLoop = () => {
  // Set variable to increment after each round
  // Initialize players, boards and ships
  const playerBoard = Gameboard();
  const compBoard = Gameboard();

  const newPlayer = new Player();
  const compPlayer = new Player();

  const firstPlayerShip = Ship('firstPlayerShip', 2);
  const secondPlayerShip = Ship('secondPlayerShip', 3);

  const firstComputerShip = Ship('firstComputerShip', 2);
  const secondComputerShip = Ship('secondComputerShip', 3);

  playerBoard.placeShip(
    [
      ['A', '1'],
      ['A', '2'],
    ],
    firstPlayerShip
  );
  playerBoard.placeShip(
    [
      ['B', '1'],
      ['B', '2'],
      ['B', '3'],
    ],
    secondPlayerShip
  );
  // Store ships in boards
  playerBoard.storeShip(firstPlayerShip);
  playerBoard.storeShip(secondPlayerShip);

  compBoard.placeShip(
    [
      ['A', '1'],
      ['A', '2'],
      // ['B', '3'],
    ],
    firstComputerShip
  );
  compBoard.placeShip(
    [
      ['B', '1'],
      ['B', '2'],
      ['B', '3'],
    ],
    secondComputerShip
  );
  // Store ships in boards
  compBoard.storeShip(firstComputerShip);
  compBoard.storeShip(secondComputerShip);
  // Create display
  const myDisplay = display('player');
  const compDisplay = display('computer');
  // Run game on every click event
  const game = (eventObj) => {
    const coords = eventObj.target.getAttribute('data-coords');
    console.log(coords);
    if (newPlayer.attack(coords.split(','), compBoard)) {
      myDisplay.hit(eventObj);
    } else {
      myDisplay.miss(eventObj);
    }
    if (compBoard.allShipsSunk()) {
      console.log('All computer ships sunk! You win!');
    }
    // TODO: have the computer make an attack after every player attack
    // and check if all players ships have been sunk
    setTimeout(() => {
      const computerAttack = compPlayer.computerAttack(playerBoard);
      console.log(computerAttack.hit);
      if (computerAttack.hit) {
        compDisplay.computerHit(computerAttack.coords);
      } else {
        compDisplay.computerMiss(computerAttack.coords);
      }
      if (playerBoard.allShipsSunk()) {
        console.log('All player ships sunk! You lose!');
        // TODO: Unbind event listeners on game over
        // TODO: Some way to restart game?
      }
    }, 250);
  };
  // Render player display and attach event listeners
  myDisplay.renderGameboard();
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('click', game));
  compDisplay.renderGameboard();
};

gameLoop();

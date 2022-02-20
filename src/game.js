import Gameboard from './Gameboard';
import Player from './Player';
import Ship from './Ship';

const gameLoop = () => {
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

  compBoard.storeShip(firstComputerShip);
  compBoard.storeShip(secondComputerShip);

  let rounds = 1;
  while (true && rounds < 20) {
    if (rounds % 2 !== 0) {
      let playerInput = prompt('Please enter your coordinates:')
        .replace(/\s+/g, '')
        .toUpperCase()
        .split(',');
      console.log(playerInput);
      newPlayer.attack(playerInput, compBoard);
    } else {
      compPlayer.computerAttack(playerBoard);
    }
    if (playerBoard.allShipsSunk()) {
      console.log('All player ships sunk! You lose!');
      break;
    } else if (compBoard.allShipsSunk()) {
      console.log('All computer ships sunk! You win!');
      break;
    }
    rounds++;
  }
};

gameLoop();

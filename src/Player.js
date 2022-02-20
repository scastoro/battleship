export const Player = () => {
  const legalCoords = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  ];
  const previousAttack = [];
  const attack = (coords, gameboard) => {
    gameboard.receiveAttack(coords);
  };
  const randomCoords = () => {
    const randomAttack = [
      legalCoords[0][Math.floor(Math.random() * legalCoords[0].length)],
      legalCoords[1][Math.floor(Math.random() * legalCoords[1].length)],
    ];
    if (randomAttack === previousAttack) {
      randomCoords();
    } else {
      previousAttack.splice(1, 1, randomAttack);
      return randomAttack;
    }
  };
  const computerAttack = (gameboard) => {
    attack(randomCoords(), gameboard);
  };
  return { attack, randomCoords, computerAttack };
};

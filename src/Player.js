export default class Player {
  constructor() {
    this.legalCoords = [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ];
    this.previousAttack = [];
  }
  attack = (coords, gameboard) => {
    gameboard.receiveAttack(coords);
  };
  randomCoords = () => {
    const randomAttack = [
      this.legalCoords[0][
        Math.floor(Math.random() * this.legalCoords[0].length)
      ],
      this.legalCoords[1][
        Math.floor(Math.random() * this.legalCoords[1].length)
      ],
    ];
    if (randomAttack === this.previousAttack) {
      this.randomCoords();
    } else {
      this.previousAttack.splice(1, 1, randomAttack);
      return randomAttack;
    }
  };
  computerAttack = (gameboard) => {
    const coords = this.randomCoords();
    console.log(coords);
    this.attack(coords, gameboard);
  };
}

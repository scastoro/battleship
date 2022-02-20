export default class Player {
  constructor() {
    // Array to enable computer to pick legal coords
    this.legalCoords = [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ];
    this.previousAttack = [];
  }
  // Send attack and receive boolean to determine the status of the attack
  attack = (coords, gameboard) => {
    return gameboard.receiveAttack(coords);
  };
  // Generate random coords and ensure that same one is not picked twice in a row
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
  // Use random coords to submit attack
  computerAttack = (gameboard) => {
    const coords = this.randomCoords();
    console.log(coords);
    return this.attack(coords, gameboard);
  };
}

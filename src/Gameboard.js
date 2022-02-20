const Gameboard = () => {
  // Array to store ships and their coords
  const ships = [];
  // Store missed shots
  const missed = [];
  // Method to store ships once they have been created
  const storeShip = (ship) => {
    if (!ship.getCoords()) {
      throw 'Ship does not have coords!';
    }
    ships.push(ship);
  };
  // Place ships at specific coords by calling the ship factory function
  const placeShip = (coords, ship) => {
    // Check if number of coords is the correct length
    if (coords.length !== ship.length) {
      throw 'Number of coords should be equal to ship length.';
    }
    ship.setCoords(coords);
  };
  // receiveAttack function that takes a pair of coords, determines whether
  // ship has been hit then sends the 'hit' function to the correct ship
  // or records the missed shot
  const receiveAttack = (coords) => {
    for (const ship of ships) {
      const attack = ship
        .getCoords()
        .find(
          (element) => element[0] === coords[0] && element[1] === coords[1]
        );

      if (attack) {
        ship.hit(coords);
        return 'Ship hit!';
      }
    }
    missed.push(coords);
    return 'Attack missed!';
  };
  // return missed shots
  const getMissed = () => {
    return missed;
  };
  // report if all ships have been sunk
  const allShipsSunk = () => {
    return ships.every((element) => element.isSunk());
  };

  return { placeShip, storeShip, receiveAttack, allShipsSunk, getMissed };
};

export default Gameboard;

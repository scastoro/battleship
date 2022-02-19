const Gameboard = () => {
  // Array to store ships and their coords
  const ships = [];
  // Method to store ships once they have been created
  const storeShip = (ship) => {
    ships.push(ship);
  };
  // Place ships at specific coords by calling the ship factory function
  const placeShip = (coords, ship) => {
    // Check if number of coords is the correct length
    if (coords.length !== ship.length) {
      return 'Number of coords should be equal to ship length.';
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
    return 'Attack missed!';
  };
  // keep track of missed shots
  // report if all ships have been sunk

  return { placeShip, storeShip, receiveAttack };
};

export default Gameboard;

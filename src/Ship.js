const Ship = (name, length, shipCoords=[]) => {
  const hitCoords = [];
  const hit = (coords) => {
    if(shipCoords.includes(coords)){
      hitCoords.push(coords);
    }
  }
  const isSunk = () => {
    if(length === hitCoords.length){
      return 'The ship is sunk!'
    }
  }
  // TODO: Hide private variables once debugging is done
  return {name, length, shipCoords, hitCoords, hitCount, hit, isSunk}
}

export default Ship;


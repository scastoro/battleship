const Ship = (name, length, shipCoords=[]) => {
  const hitCoords = [];
  const hit = (coords) => {
    hitCoords.push(shipCoords.find(element => element[0] === coords[0] && element[1] === coords[1]))
  }
  const isSunk = () => {
    if(length === hitCoords.length){
      return 'The ship is sunk!'
    }
  }
  // TODO: Hide private variables once debugging is done
  return {name, length, shipCoords, hitCoords, hit, isSunk}
}

export default Ship;


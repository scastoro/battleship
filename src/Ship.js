const Ship = (name, length) => {
  const shipCoords = [];
  const hitCoords = [];
  const setCoords = (coords) => {
    coords.forEach(element => {
      shipCoords.push(element)
    });
  }
  const getCoords = () => {
    return shipCoords;
  }
  const hit = (coords) => {
    hitCoords.push(shipCoords.find(element => element[0] === coords[0] && element[1] === coords[1]))
  }
  const isSunk = () => {
    if(length === hitCoords.length){
      return 'The ship is sunk!'
    }
  }
  // TODO: Hide private variables once debugging is done
  return {name, length, shipCoords, hitCoords, hit, isSunk, setCoords, getCoords}
}

export default Ship;


import Ship from "./Ship";


describe('Ship factory function', () => {
  const testShip = Ship( 'myShip', 4, [[1,1],[1,2],[1,3],[1,4]])
  testShip.hit([1,1])
  testShip.hit([1,2])
  testShip.hit([1,3])
  testShip.hit([1,4])

  test('name works', () => {
    expect(testShip.name).toBe('myShip');
  });
  test('length works', () => {
    expect(testShip.length).toBe(4);
  });
  test('correct ship coords', () => {
    expect(testShip.shipCoords).toStrictEqual([[1,1],[1,2],[1,3],[1,4]]);
  });
  test('ship is sunk', () => {
    expect(testShip.isSunk()).toBe('The ship is sunk!');
  });
});
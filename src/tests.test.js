import Ship from "./Ship";

jest.mock('./Ship', () => ({ name: 'myShip', length: 4, shipCoords: [[1,1],[1,2],[1,3],[1,4]]}))

describe('Ship factory function', () => {
  test('name works', () => {
    expect(Ship.name).toBe('myShip');
  });
  test('length works', () => {
    expect(Ship.length).toBe(4);
  })
})
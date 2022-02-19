import Ship from './Ship';
import Gameboard from './Gameboard';

describe('Ship factory function', () => {
  const testShip = Ship('myShip', 4);
  testShip.setCoords([
    ['A', 1],
    ['A', 2],
    ['A', 3],
    ['A', 4],
  ]);
  testShip.hit(['A', 1]);
  testShip.hit(['A', 2]);
  testShip.hit(['A', 3]);
  testShip.hit(['A', 4]);

  test('name works', () => {
    expect(testShip.name).toBe('myShip');
  });
  test('length works', () => {
    expect(testShip.length).toBe(4);
  });
  test('correct ship coords', () => {
    expect(testShip.getCoords()).toStrictEqual([
      ['A', 1],
      ['A', 2],
      ['A', 3],
      ['A', 4],
    ]);
  });
  test('ship is sunk', () => {
    expect(testShip.isSunk()).toBe(true);
  });
});

describe('test gameboard factory function', () => {
  const testShip = Ship('gameBoardShip', 3);
  const testShip2 = Ship('gameBoardShip', 2);

  const testBoard = Gameboard();

  testBoard.placeShip(
    [
      ['A', '1'],
      ['A', '2'],
      ['A', '3'],
    ],
    testShip
  );

  testBoard.storeShip(testShip);

  testBoard.receiveAttack(['A', '2']);
  testBoard.receiveAttack(['A', '3']);

  test('place ship', () => {
    expect(testShip.getCoords()).toStrictEqual([
      ['A', '1'],
      ['A', '2'],
      ['A', '3'],
    ]);
  });
  test('wrong coords length for ship', () => {
    expect(
      testBoard.placeShip(
        [
          ['A', '1'],
          ['A', '2'],
          ['A', '3'],
        ],
        testShip2
      )
    ).toBe('Number of coords should be equal to ship length.');
  });
  test('received attack: hit', () => {
    expect(testBoard.receiveAttack(['A', '1'])).toBe('Ship hit!');
  });
  test('hit coords', () => {
    expect(testShip.hitCoords).toStrictEqual([
      ['A', '2'],
      ['A', '3'],
      ['A', '1'],
    ]);
  });
  test('received attack: missed', () => {
    expect(testBoard.receiveAttack(['B', '1'])).toBe('Attack missed!');
  });
  test('all ships sunk', () => {
    expect(testBoard.allShipsSunk()).toBe(true);
  });
  test('get missed shots', () => {
    expect(testBoard.getMissed()).toStrictEqual([['B', '1']]);
  });
});

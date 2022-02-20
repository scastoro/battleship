/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
  // Array to store ships and their coords
  const ships = [];
  // Store missed shots
  const missed = [];
  // Method to store ships once they have been created
  const storeShip = (ship) => {
    if (ship.getCoords()) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
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


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (name, length) => {
  const shipCoords = [];
  const hitCoords = [];
  const setCoords = (coords) => {
    coords.forEach((element) => {
      shipCoords.push(element);
    });
  };
  const getCoords = () => {
    return shipCoords;
  };
  const hit = (coords) => {
    hitCoords.push(
      shipCoords.find(
        (element) => element[0] === coords[0] && element[1] === coords[1]
      )
    );
  };
  const isSunk = () => {
    if (length === hitCoords.length) {
      return true;
    } else {
      return false;
    }
  };
  // TODO: Hide private variables once debugging is done
  return {
    name,
    length,
    shipCoords,
    hitCoords,
    hit,
    isSunk,
    setCoords,
    getCoords,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");




const gameLoop = () => {
  const playerBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const compBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const newPlayer = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const compPlayer = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]();

  const firstPlayerShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])('firstPlayerShip', 2);
  const secondPlayerShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])('secondPlayerShip', 3);

  const firstComputerShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])('firstComputerShip', 2);
  const secondComputerShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])('secondComputerShip', 3);

  playerBoard.placeShip(
    [
      ['A', '1'],
      ['A', '2'],
    ],
    firstPlayerShip
  );
  playerBoard.placeShip(
    [
      ['B', '1'],
      ['B', '2'],
      ['B', '3'],
    ],
    secondPlayerShip
  );

  playerBoard.storeShip(firstPlayerShip);
  playerBoard.storeShip(secondPlayerShip);

  compBoard.placeShip(
    [
      ['A', '1'],
      ['A', '2'],
      // ['B', '3'],
    ],
    firstComputerShip
  );
  compBoard.placeShip(
    [
      ['B', '1'],
      ['B', '2'],
      ['B', '3'],
    ],
    secondComputerShip
  );

  compBoard.storeShip(firstComputerShip);
  compBoard.storeShip(secondComputerShip);

  let rounds = 1;
  while ( true && rounds < 20) {
    if (rounds % 2 !== 0) {
      let playerInput = prompt('Please enter your coordinates:')
        .replace(/\s+/g, '')
        .toUpperCase()
        .split(',');
      console.log(playerInput);
      newPlayer.attack(playerInput, compBoard);
    } else {
      compPlayer.computerAttack(playerBoard);
    }
    if (playerBoard.allShipsSunk()) {
      console.log('All player ships sunk! You lose!');
      break;
    } else if (compBoard.allShipsSunk()) {
      console.log('All computer ships sunk! You win!');
      break;
    }
    rounds++;
  }
};

gameLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25EVjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN0Q3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNOO0FBQ0o7O0FBRTFCO0FBQ0Esc0JBQXNCLHNEQUFTO0FBQy9CLG9CQUFvQixzREFBUzs7QUFFN0Isd0JBQXdCLCtDQUFNO0FBQzlCLHlCQUF5QiwrQ0FBTTs7QUFFL0IsMEJBQTBCLGlEQUFJO0FBQzlCLDJCQUEyQixpREFBSTs7QUFFL0IsNEJBQTRCLGlEQUFJO0FBQ2hDLDZCQUE2QixpREFBSTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVMsS0FBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBBcnJheSB0byBzdG9yZSBzaGlwcyBhbmQgdGhlaXIgY29vcmRzXG4gIGNvbnN0IHNoaXBzID0gW107XG4gIC8vIFN0b3JlIG1pc3NlZCBzaG90c1xuICBjb25zdCBtaXNzZWQgPSBbXTtcbiAgLy8gTWV0aG9kIHRvIHN0b3JlIHNoaXBzIG9uY2UgdGhleSBoYXZlIGJlZW4gY3JlYXRlZFxuICBjb25zdCBzdG9yZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmdldENvb3JkcygpKSB7XG4gICAgICB0aHJvdyAnU2hpcCBkb2VzIG5vdCBoYXZlIGNvb3JkcyEnO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuICAvLyBQbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZHMgYnkgY2FsbGluZyB0aGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAvLyBDaGVjayBpZiBudW1iZXIgb2YgY29vcmRzIGlzIHRoZSBjb3JyZWN0IGxlbmd0aFxuICAgIGlmIChjb29yZHMubGVuZ3RoICE9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgdGhyb3cgJ051bWJlciBvZiBjb29yZHMgc2hvdWxkIGJlIGVxdWFsIHRvIHNoaXAgbGVuZ3RoLic7XG4gICAgfVxuICAgIHNoaXAuc2V0Q29vcmRzKGNvb3Jkcyk7XG4gIH07XG4gIC8vIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRzLCBkZXRlcm1pbmVzIHdoZXRoZXJcbiAgLy8gc2hpcCBoYXMgYmVlbiBoaXQgdGhlbiBzZW5kcyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcFxuICAvLyBvciByZWNvcmRzIHRoZSBtaXNzZWQgc2hvdFxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgY29uc3QgYXR0YWNrID0gc2hpcFxuICAgICAgICAuZ2V0Q29vcmRzKClcbiAgICAgICAgLmZpbmQoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKTtcblxuICAgICAgaWYgKGF0dGFjaykge1xuICAgICAgICBzaGlwLmhpdChjb29yZHMpO1xuICAgICAgICByZXR1cm4gJ1NoaXAgaGl0ISc7XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZC5wdXNoKGNvb3Jkcyk7XG4gICAgcmV0dXJuICdBdHRhY2sgbWlzc2VkISc7XG4gIH07XG4gIC8vIHJldHVybiBtaXNzZWQgc2hvdHNcbiAgY29uc3QgZ2V0TWlzc2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBtaXNzZWQ7XG4gIH07XG4gIC8vIHJlcG9ydCBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCBzdG9yZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgZ2V0TWlzc2VkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxlZ2FsQ29vcmRzID0gW1xuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ10sXG4gICAgXTtcbiAgICB0aGlzLnByZXZpb3VzQXR0YWNrID0gW107XG4gIH1cbiAgYXR0YWNrID0gKGNvb3JkcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcbiAgcmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IFtcbiAgICAgIHRoaXMubGVnYWxDb29yZHNbMF1bXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGVnYWxDb29yZHNbMF0ubGVuZ3RoKVxuICAgICAgXSxcbiAgICAgIHRoaXMubGVnYWxDb29yZHNbMV1bXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGVnYWxDb29yZHNbMV0ubGVuZ3RoKVxuICAgICAgXSxcbiAgICBdO1xuICAgIGlmIChyYW5kb21BdHRhY2sgPT09IHRoaXMucHJldmlvdXNBdHRhY2spIHtcbiAgICAgIHRoaXMucmFuZG9tQ29vcmRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldmlvdXNBdHRhY2suc3BsaWNlKDEsIDEsIHJhbmRvbUF0dGFjayk7XG4gICAgICByZXR1cm4gcmFuZG9tQXR0YWNrO1xuICAgIH1cbiAgfTtcbiAgY29tcHV0ZXJBdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gdGhpcy5yYW5kb21Db29yZHMoKTtcbiAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xuICAgIHRoaXMuYXR0YWNrKGNvb3JkcywgZ2FtZWJvYXJkKTtcbiAgfTtcbn1cbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgY29uc3QgaGl0Q29vcmRzID0gW107XG4gIGNvbnN0IHNldENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICBjb29yZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgc2hpcENvb3Jkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBnZXRDb29yZHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBDb29yZHM7XG4gIH07XG4gIGNvbnN0IGhpdCA9IChjb29yZHMpID0+IHtcbiAgICBoaXRDb29yZHMucHVzaChcbiAgICAgIHNoaXBDb29yZHMuZmluZChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV1cbiAgICAgIClcbiAgICApO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA9PT0gaGl0Q29vcmRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIFRPRE86IEhpZGUgcHJpdmF0ZSB2YXJpYWJsZXMgb25jZSBkZWJ1Z2dpbmcgaXMgZG9uZVxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIHNoaXBDb29yZHMsXG4gICAgaGl0Q29vcmRzLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0Q29vcmRzLFxuICAgIGdldENvb3JkcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcEJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcigpO1xuICBjb25zdCBjb21wUGxheWVyID0gbmV3IFBsYXllcigpO1xuXG4gIGNvbnN0IGZpcnN0UGxheWVyU2hpcCA9IFNoaXAoJ2ZpcnN0UGxheWVyU2hpcCcsIDIpO1xuICBjb25zdCBzZWNvbmRQbGF5ZXJTaGlwID0gU2hpcCgnc2Vjb25kUGxheWVyU2hpcCcsIDMpO1xuXG4gIGNvbnN0IGZpcnN0Q29tcHV0ZXJTaGlwID0gU2hpcCgnZmlyc3RDb21wdXRlclNoaXAnLCAyKTtcbiAgY29uc3Qgc2Vjb25kQ29tcHV0ZXJTaGlwID0gU2hpcCgnc2Vjb25kQ29tcHV0ZXJTaGlwJywgMyk7XG5cbiAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFxuICAgIFtcbiAgICAgIFsnQScsICcxJ10sXG4gICAgICBbJ0EnLCAnMiddLFxuICAgIF0sXG4gICAgZmlyc3RQbGF5ZXJTaGlwXG4gICk7XG4gIHBsYXllckJvYXJkLnBsYWNlU2hpcChcbiAgICBbXG4gICAgICBbJ0InLCAnMSddLFxuICAgICAgWydCJywgJzInXSxcbiAgICAgIFsnQicsICczJ10sXG4gICAgXSxcbiAgICBzZWNvbmRQbGF5ZXJTaGlwXG4gICk7XG5cbiAgcGxheWVyQm9hcmQuc3RvcmVTaGlwKGZpcnN0UGxheWVyU2hpcCk7XG4gIHBsYXllckJvYXJkLnN0b3JlU2hpcChzZWNvbmRQbGF5ZXJTaGlwKTtcblxuICBjb21wQm9hcmQucGxhY2VTaGlwKFxuICAgIFtcbiAgICAgIFsnQScsICcxJ10sXG4gICAgICBbJ0EnLCAnMiddLFxuICAgICAgLy8gWydCJywgJzMnXSxcbiAgICBdLFxuICAgIGZpcnN0Q29tcHV0ZXJTaGlwXG4gICk7XG4gIGNvbXBCb2FyZC5wbGFjZVNoaXAoXG4gICAgW1xuICAgICAgWydCJywgJzEnXSxcbiAgICAgIFsnQicsICcyJ10sXG4gICAgICBbJ0InLCAnMyddLFxuICAgIF0sXG4gICAgc2Vjb25kQ29tcHV0ZXJTaGlwXG4gICk7XG5cbiAgY29tcEJvYXJkLnN0b3JlU2hpcChmaXJzdENvbXB1dGVyU2hpcCk7XG4gIGNvbXBCb2FyZC5zdG9yZVNoaXAoc2Vjb25kQ29tcHV0ZXJTaGlwKTtcblxuICBsZXQgcm91bmRzID0gMTtcbiAgd2hpbGUgKHRydWUgJiYgcm91bmRzIDwgMjApIHtcbiAgICBpZiAocm91bmRzICUgMiAhPT0gMCkge1xuICAgICAgbGV0IHBsYXllcklucHV0ID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgeW91ciBjb29yZGluYXRlczonKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnJylcbiAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgLnNwbGl0KCcsJyk7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXJJbnB1dCk7XG4gICAgICBuZXdQbGF5ZXIuYXR0YWNrKHBsYXllcklucHV0LCBjb21wQm9hcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wUGxheWVyLmNvbXB1dGVyQXR0YWNrKHBsYXllckJvYXJkKTtcbiAgICB9XG4gICAgaWYgKHBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQWxsIHBsYXllciBzaGlwcyBzdW5rISBZb3UgbG9zZSEnKTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY29tcEJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQWxsIGNvbXB1dGVyIHNoaXBzIHN1bmshIFlvdSB3aW4hJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcm91bmRzKys7XG4gIH1cbn07XG5cbmdhbWVMb29wKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
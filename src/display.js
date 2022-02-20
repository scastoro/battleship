const display = () => {
  const content = document.querySelector('.content');
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  // Generate gameboard HTML based on column array
  const renderGameboard = () => {
    const gameboardContainer = document.createElement('section');
    gameboardContainer.classList.toggle('gameboard-container');
    const headerRow = document.createElement('section');
    headerRow.classList.toggle('header-row');
    columns.forEach((col) => {
      const hrCell = document.createElement('section');
      hrCell.textContent = col;
      hrCell.classList.toggle('hr-cell');
      headerRow.appendChild(hrCell);
    });
    gameboardContainer.appendChild(headerRow);
    for (let i = 1; i <= 10; i++) {
      const row = document.createElement('section');
      row.classList.toggle('row');
      const headerCell = document.createElement('section');
      headerCell.textContent = i;
      headerCell.classList.toggle('header-cell');
      row.appendChild(headerCell);
      columns.forEach((col) => {
        const cell = document.createElement('section');
        cell.classList.toggle('cell');
        cell.setAttribute('data-coords', `${col},${i}`);
        row.appendChild(cell);
      });
      gameboardContainer.appendChild(row);
    }

    content.appendChild(gameboardContainer);
  };
  // Change background color of cell depending on hit or miss
  const hit = (eventObj) => {
    eventObj.target.classList.toggle('hit');
  };
  const miss = (eventObj) => {
    eventObj.target.classList.toggle('miss');
  };
  return { renderGameboard, hit, miss };
};

export default display;
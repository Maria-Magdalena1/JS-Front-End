document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const form = document.getElementById('solutionCheck');
  const table = form.querySelector('table');
  const inputs = Array.from(table.querySelectorAll('input'));
  const messageP = document.getElementById('check');

  form.addEventListener('submit',handleCheck);

  function handleCheck (e){
    e.preventDefault();
    if (isSudomuValid()) {
      table.style.border = '2px solid green';
      messageP.textContent = 'Success!';
    } else {
      table.style.border = '2px solid red';
      messageP.textContent = 'Keep trying...';
    }
  };

  form.addEventListener('reset', handleClear);
  function handleClear () {
    // Clearing inputs handled by reset
    table.style.border = 'none';
    messageP.textContent = '';
  };

  function isSudomuValid() {
    const size = 3; // fixed size from your HTML

    let board = [];
    for (let row = 0; row < size; row++) {
      let rowValues = [];
      for (let col = 0; col < size; col++) {
        const inputIndex = row * size + col;
        const val = Number(inputs[inputIndex].value);
        rowValues.push(val);
      }
      board.push(rowValues);
    }

    // Check rows
    for (const row of board) {
      if (!allUnique(row)) return false;
    }

    // Check columns
    for (let col = 0; col < size; col++) {
      let colVals = [];
      for (let row = 0; row < size; row++) {
        colVals.push(board[row][col]);
      }
      if (!allUnique(colVals)) return false;
    }

    return true;
  }

  function allUnique(arr) {
    const seen = new Set();
    for (const num of arr) {
      if (num < 1 || num > arr.length) return false; // out of range
      if (seen.has(num)) return false; // duplicate
      seen.add(num);
    }
    return true;
  }
}

const allBoxes = document.querySelectorAll('.row');
const turnText = document.querySelector('.turnText');
const refreshGameBtn = document.querySelector('.refresh');
let cross = true;
const ticTacToeValues = new Array(9).fill('empty');
let actualBoxes = [];
let winnerDecided = false;

allBoxes.forEach((boxes) => {
  for (const eachBox of boxes.children) {
    actualBoxes.push(eachBox);
  }
});
const fillInValues = () => {
  actualBoxes.forEach((box, index) => {
    box.innerHTML = ticTacToeValues[index];
  });
};

actualBoxes.forEach((box, index) => {
  box.addEventListener('click', function (event) {
    if (event.target.innerHTML === 'empty' && !winnerDecided) {
      ticTacToeValues[index] = cross ? 'X' : 'O';
      fillInValues();
      cross = !cross;
      turnText.innerHTML = `${cross ? 'Cross' : 'Circle'}'s turn`;
    }
    checkDraw();
    checkIsWinner();
  });
});

refreshGameBtn.addEventListener('click', function (event) {
  window.location.reload();
});

fillInValues();

const checkIsWinner = () => {
  if (
    ticTacToeValues[0] === ticTacToeValues[1] &&
    ticTacToeValues[0] === ticTacToeValues[2] &&
    ticTacToeValues[0] !== 'empty'
  ) {
    turnText.innerHTML = `${ticTacToeValues[0]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[3] !== 'empty' &&
    ticTacToeValues[3] === ticTacToeValues[4] &&
    ticTacToeValues[4] === ticTacToeValues[5]
  ) {
    turnText.innerHTML = `${ticTacToeValues[3]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[6] !== 'empty' &&
    ticTacToeValues[6] === ticTacToeValues[7] &&
    ticTacToeValues[7] === ticTacToeValues[8]
  ) {
    turnText.innerHTML = `${ticTacToeValues[6]} won`;
    refreshGameBtn.removeAttribute('disabled');
  } else if (
    ticTacToeValues[0] !== 'empty' &&
    ticTacToeValues[0] === ticTacToeValues[3] &&
    ticTacToeValues[3] === ticTacToeValues[6]
  ) {
    turnText.innerHTML = `${ticTacToeValues[0]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[1] !== 'empty' &&
    ticTacToeValues[1] === ticTacToeValues[4] &&
    ticTacToeValues[4] === ticTacToeValues[7]
  ) {
    turnText.innerHTML = `${ticTacToeValues[1]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[2] !== 'empty' &&
    ticTacToeValues[2] === ticTacToeValues[5] &&
    ticTacToeValues[5] === ticTacToeValues[8]
  ) {
    turnText.innerHTML = `${ticTacToeValues[2]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[0] !== 'empty' &&
    ticTacToeValues[0] === ticTacToeValues[4] &&
    ticTacToeValues[4] === ticTacToeValues[8]
  ) {
    turnText.innerHTML = `${ticTacToeValues[0]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  } else if (
    ticTacToeValues[2] !== 'empty' &&
    ticTacToeValues[2] === ticTacToeValues[4] &&
    ticTacToeValues[4] === ticTacToeValues[6]
  ) {
    turnText.innerHTML = `${ticTacToeValues[2]} won`;
    refreshGameBtn.removeAttribute('disabled');
    winnerDecided = true;
  }
};

const checkDraw = () => {
  if (ticTacToeValues.every((val) => val !== 'empty')) {
    turnText.innerHTML = 'Game Draw!';
    refreshGameBtn.removeAttribute('disabled');
  }
};

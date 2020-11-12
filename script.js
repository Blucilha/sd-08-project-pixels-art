function randomColor() {
  const c1 = Math.floor(Math.random() * 255);
  const c2 = Math.floor(Math.random() * 255);
  const c3 = Math.floor(Math.random() * 255);
  return `rgb(${c1},${c2},${c3})`;
}

function removeSelected() {
  const colors = document.getElementsByTagName('ul');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function creatColorsOptions() {
  const options = document.getElementById('color-palette');
  const colors = [];
  for (let i = 0; i < 4; i += 1) {
    colors[i] = document.createElement('ul');
    colors[i].classList.add('color');
    colors[i].addEventListener('click', () => {
      removeSelected();
      colors[i].classList.add('selected');
    });
    if (i === 0) {
      colors[i].style.backgroundColor = 'black';
      colors[i].classList.add('selected');
    } else {
      colors[i].style.backgroundColor = randomColor();
    }
    options.appendChild(colors[i]);
  }
}

function creatPixelBoard(n) {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < n; i += 1) {
    const pixelsLine = document.createElement('div');
    pixelsLine.className = 'line';
    board.appendChild(pixelsLine);
    for (let i2 = 0; i2 < n; i2 += 1) {
      const pixels = document.createElement('div');
      pixels.classList.add('pixel');
      pixels.addEventListener('click', () => {
        pixels.style.backgroundColor = colorToBePainted();
      });
      board.appendChild(pixels);
    }
  }
}

function sizeOfTheBoard() {
  let inputData = document.getElementById('#board-size').childNodes[0].nodeName;
  let chosenNumber = parseInt(inputData);
  console.log(inputData);
  return chosenNumber;
}

function boardGenerator() {
  const createBoardButton = document.querySelector('#generate-board');
  createBoardButton.addEventListener('click', () => {
    let size = sizeOfTheBoard();
    if (size < 1 || size > 50) {
      return alert('Board inválido!');
    } else {
    creatPixelBoard(size);
    }
  });
}

function allPixelsBckGroundWhite() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const button = document.getElementById('clear-board');
  button.innerHTML = 'Limpar';
  button.addEventListener('click', allPixelsBckGroundWhite);
}

function colorToBePainted() {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  return colorSelected;
}


window.onload = function () {
  boardGenerator();
  clearBoard();
  creatColorsOptions();
  creatPixelBoard(5);
};

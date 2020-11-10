function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const btn = document.getElementById('clear-board');
btn.addEventListener('click', clearBoard);

const btnGenerate = document.getElementById('generate-board');
btnGenerate.addEventListener('click', generateBoard);

let boardSize = document.getElementById('board-size')

let numberOfLines = 5

function generateBoard() {
  apagaPixelBoard();
  if (boardSize.value < 5){
    numberOfLines = 5
  } else if (boardSize.value >= 5 && boardSize.value <= 50){
    numberOfLines = boardSize.value
  } else if (boardSize.value > 50){
    numberOfLines = 50
  }
  geraPixelBoard();
}

const cores = ['#000000'];

function selecionaCor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className = 'color';
  event.target.className = 'selected color';
}

function geraPaletaDeCores() {
  const paletaDeCores = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divCor = document.createElement('div');
    divCor.className = 'color';
    divCor.addEventListener('click', selecionaCor);
    paletaDeCores.append(divCor);
  }
}

geraPaletaDeCores();

function geraCores() {
  const cor = document.querySelectorAll('#color-palette .color');

  cor[0].style.backgroundColor = '#000000';
  cor[0].className = 'selected color';

  for (let index = 1; index < 4; index += 1) {
    cor[index].style.backgroundColor = '#' + (Math.floor(Math.random() * 16777215).toString(16));
    cores.push(cor[index].style.backgroundColor);
  }
}

function evitaCorRepetida() {
  for (let index = 0; index < cores.length; index += 1) {
    let pos = index + 1;

    for (pos; pos < cores.length; pos += 1) {
      if (cores[index] === cores[pos] || cores[pos] === '#FFFFFF' || cores[pos] === '') {
        geraCores();
      }
    }
  }
}

evitaCorRepetida();
geraCores();

function pintaPixel(event) {
  const corSelecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

const pixelBoard = document.getElementById('pixel-board');

function geraPixel(index) {
  for (let pos = 0; pos < numberOfLines; pos += 1) {
    const pixel = document.createElement('div');
    const lines = document.querySelectorAll('.boardLines')
    pixel.className = 'pixel';
    pixel.style.backgroundColor = '#FFFFFF';
    pixel.addEventListener('click', pintaPixel);
    lines[index].append(pixel);
  }
}

function geraPixelBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'boardLines';
    pixelBoard.append(boardLine);
    geraPixel(index);
  }
}

function apagaPixelBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    pixelBoard.lastChild.remove()
  }
}

geraPixelBoard();

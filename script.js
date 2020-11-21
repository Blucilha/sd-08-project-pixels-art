function createDivPalette() {
  const paletteColor = document.getElementById('color-palette');
  for (let index = 1; index <= 4; index += 1) {
    let paletteDiv = document.createElement('div');
    paletteDiv.className = 'color';
    paletteColor.appendChild(paletteDiv);
  }
}
createDivPalette();

let boardSize = 5;
function createDivPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 1; index <= (boardSize ** 2); index += 1) {
    let pixelDivs = document.createElement('div');
    pixelDivs.className = 'pixel';
    pixelBoard.appendChild(pixelDivs);
  }
  pixelBoard.style.width = boardSize * 42 + 'px';
}
createDivPixelBoard();

function styleColors() {
  let x = Math.random() * 255;
  let y = Math.random() * 255;
  let z = Math.random() * 255;
  const paletteColors = document.getElementsByClassName('color');
  paletteColors[0].style.backgroundColor = 'black';
  paletteColors[1].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  paletteColors[2].style.backgroundColor = `rgb(${z}, ${x}, ${y})`;
  paletteColors[3].style.backgroundColor = `rgb(${y}, ${z}, ${x})`;
}
styleColors();

let getColor = document.getElementsByClassName('color');

function firstColor(){
  getColor[0].classList.add('selected');
}
firstColor();

function eventSelected (event){
  let elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEventSelected(){
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', eventSelected);
  }
}
addEventSelected();

function paintingPixels() {
let paintingPixels = document.getElementById('pixel-board');
  paintingPixels.addEventListener('click', function (event){
    let colorSelected = document.querySelector('.color.selected').style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
  });
}
paintingPixels();

function clearButton(){
let arrayPixels = document.getElementsByClassName('pixel');
  for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
    arrayPixels[indexClear].style.backgroundColor = 'white';
  }
}
clearButton();

let button = document.getElementById('clear-board');
button.addEventListener('click', clearButton);



const colorPalette = document.querySelector("#color-palette");
const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');

function geraNumeroRandom() {
  return Math.floor(Math.random() * 256);
}

function geraCoresRandomRGB() {
  let red = geraNumeroRandom();
  let green = geraNumeroRandom();
  let blue = geraNumeroRandom();
  return `rgb( ${red} , ${green} , ${blue})`;
}

function geraArrayDeCores() {
  let cores = ["black"];
  while (cores.length < 4) {
    cores.push(geraCoresRandomRGB());
  }
  return cores;
}

function geraPaletaDeCores() {
  const cores = geraArrayDeCores();
  for(let index = 0; index < cores.length; index += 1) {
    const paletaDeCores = document.createElement('div');
    paletaDeCores.style.backgroundColor = cores[index];
    paletaDeCores.classList.add('color');
    if(index == 0) {
      paletaDeCores.classList.add('selected');
    }
    colorPalette.appendChild(paletaDeCores);
  }
}

geraPaletaDeCores();

function geraQuadroDePixels() {
  for (let linha = 0; linha < 5; linha++) {
    let quadroPixel = document.createElement('div');
    quadroPixel.classList.add('linha');
    pixelBoard.appendChild(quadroPixel);
    for (let elemento = 0; elemento < 5; elemento += 1) {
      let pixel = document.createElement('div');
      quadroPixel.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

geraQuadroDePixels()

let cor = 'black';
function alteraPaletaSelecionada(event) {
  let removedSeletect = document.getElementsByClassName("selected");

  for (let i = 0; i < removedSeletect.length; i++) {
    removedSeletect[i].classList.remove("selected");
  }

  let evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add("selected");
}

colorPalette.addEventListener("click", alteraPaletaSelecionada);

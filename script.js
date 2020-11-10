//Função para criar a paleta de cores
const colors = ['black', 'red', 'green', 'blue'];
function colorsPalete() {
  const divPaleta = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i++) {
    const divColors = document.createElement('div');
    divColors.className = 'color';
    divColors.style.backgroundColor = colors[i];
    divPaleta.appendChild(divColors);
    if (colors[i] == 'black') {
      divColors.className = 'color selected';
    };
  };
};
colorsPalete();

//Função para criar os elementos
function pixelBoard() {

  const divPixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i++) {
    const divPixelsLinha = document.createElement('div');
    divPixelBoard.appendChild(divPixelsLinha);
    for (let j = 0; j < 5; j++) {
      const divPixels = document.createElement('div');
      divPixelBoard.appendChild(divPixels);
      divPixels.className = 'pixel';
    };
  };
};
pixelBoard();

//Função para selecionar as cores
function selecionaPixel() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      const corSelecionada = document.getElementsByClassName('selected')[0];
      corSelecionada.className = 'color';
      event.target.className = 'color selected';
    };
  });
};
selecionaPixel();

//Função para pintar com a cor selecionada
function pintaPixel() {
  document.addEventListener('click', function (event) {
    const pixel = document.getElementsByClassName('selected')[0].style.backgroundColor;
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = pixel;
    };
  });
};
pintaPixel();
const body = document.querySelector('body');

function createElements() {
    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';
    body.appendChild(h1);
}

createElements();

function createColorPallet() {
    let colors = ["black", "red", "blue", "green"];

    //Cria a paleta de cores
    let colorPallet = document.createElement('div');
    colorPallet.id = 'color-palette';
    colorPallet.style.display = 'block'
    body.appendChild(colorPallet);

    //Cria cada elemento da paleta de cores
    for (let i = 0; i < colors.length; i += 1) {
        let block = document.createElement('div');
        block.className = 'color';
        block.style.height = '30px';
        block.style.width = '30px';
        block.style.display = 'inline-block';
        block.style.border = '1px solid black';
        block.style.backgroundColor = colors[i];

        //Adciona a classe selected a cor preta assim que a página é carregada
        if (colors[i] == 'black') {
            block.className = 'color selected';
        }

        block.addEventListener('click', selectColor);

        colorPallet.appendChild(block);
    }
}

createColorPallet();

function criaQuadro() {
    let quantLines = 5;
    let quantPixelPerLine = 5;
    let addBorderSize = 2 * quantPixelPerLine;
    let pixelSize = 40;

    let quadro = document.createElement('div');
    quadro.id = 'pixel-board';
    let quadroWidth = quantPixelPerLine * pixelSize + addBorderSize + 'px';
    quadro.style.width = quadroWidth;
    quadro.style.maxWidth = quadroWidth;
    body.appendChild(quadro);

    for (let i = 0; i < (quantPixelPerLine * quantLines); i += 1) {
        let div = document.createElement('div');
        div.style.display = 'inline-block';
        div.className = 'pixel';
        div.style.backgroundColor = 'white';
        div.style.width = pixelSize + 'px';
        div.style.height = pixelSize + 'px';
        div.style.border = '1px solid black'
        quadro.appendChild(div);
    }

}

criaQuadro();

function selectColor(event) {
    let colorPixels = document.querySelectorAll('.color');
    for (let i = 0; i < colorPixels.length; i += 1){
        colorPixels[i].className = 'color';
    }
    event.target.className = 'color selected';
}
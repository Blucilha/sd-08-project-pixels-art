const colors = ['black', 'red', 'green', 'blue'];

colors.forEach((color) => {
    const paletteColors = document.createElement('div');

    paletteColors.className = 'color';
    paletteColors.style.backgroundColor = color;

    document.querySelector('#color-palette').appendChild(paletteColors);
});

document.querySelector('.color').classList.add('selected');

document.querySelectorAll('.color').forEach((color, index, arr) => {
    color.addEventListener('click', () => {
        arr.forEach(element => element.classList.remove('selected'));
        
        color.classList.add('selected');
    });
});

const pixelsLineAndColumn = [5, 5];

for (let lineNumber = 1; lineNumber <= pixelsLineAndColumn[0]; lineNumber += 1) {
    const line = document.createElement('div');

    line.className = 'line';

    for (let columnNumber = 1; columnNumber <= pixelsLineAndColumn[1]; columnNumber += 1) {
        const column = document.createElement('div');

        column.className = 'pixel';
        column.style.backgroundColor = 'white';

        line.appendChild(column);
    }

    document.querySelector('#pixel-board').appendChild(line);
}

const pixels = document.querySelectorAll('.pixel')

pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        const colorToApply = document.querySelector('.selected').style.backgroundColor;

        pixel.style.backgroundColor = colorToApply;
    });
});

document.querySelector('#clear-board').addEventListener('click', () => {
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
});

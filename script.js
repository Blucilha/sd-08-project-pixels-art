const corDeFundo = ["black", "green", "orange", "yellow"];


//Requisito 2 e 3
function createDivs() {
    let palette = document.getElementById("color-palette");
    
    for (let index = 0; index < corDeFundo.length; index += 1) {
        let div = document.createElement("div");
        div.className = "color";
        palette.appendChild(div);
        div.addEventListener("click", changeColor)
    }
}
createDivs();

const paints = document.getElementsByClassName("color");

function colors (){
    for (let c = 0; c < corDeFundo.length; c += 1){
        paints[c].style.backgroundColor = corDeFundo[c];
    }
    
}
colors ();

// Requisito 4 e 5
function createBoard(size) {
    let board = document.getElementById("pixel-board");

    for (let index = 0; index < size; index += 1) {
        let div = document.createElement("div");
        div.className = "pixel-row";
        board.appendChild(div);
        
        let pixelRow = document.querySelectorAll('.pixel-row')[index];

        for (let index = 0; index < size; index += 1) {
            let div = document.createElement("div");
            div.className = "pixel";
            pixelRow.appendChild(div);
        }
    }
    paintBoard();
}
createBoard(5);

//Requisito 6
function mousePaint(){
    paints[0].classList.add("selected");
}
mousePaint();

//Requisito 7
function changeColor(event){
    for (index = 0; index < paints.length; index += 1) {
        paints[index].className = "color";
    }
    event.target.className += " selected";
}

//Requisito 8
function paintBoard(){
    let pixel = document.querySelectorAll(".pixel");
    
    for (index = 0; index < pixel.length; index += 1){
        pixel[index].addEventListener("click",paintPixel);
    }
}
paintBoard();

function paintPixel (event){
    let paintSelect = document.querySelector(".selected");
    let paintColor = paintSelect.style.backgroundColor;
    event.target.style.backgroundColor = paintColor;
    console.log(paintColor);
}


//Requisito 9
function createButton (){
    let btn = document.getElementById("clear-board");
    btn.addEventListener("click",clearBoard)
}
createButton ();

function clearBoard(event){
    let clean = document.querySelectorAll(".pixel");
    
    for (let index = 0; index < clean.length; index += 1){
        clean[index].style.backgroundColor = "white";
    }
        event.target.style.backgroundColor;
}

//Requisito 10
function defineSize () {
    let btnBoard = document.getElementById('generate-board');
    
    btnBoard.addEventListener("click", function() {
        let input = document.getElementById('board-size');

        if (input.value == '' || input.value <= 0) {
            alert('Board Inválido!');
        }
        let pixel = document.querySelectorAll('.pixel');
        let pixelRow = document.querySelectorAll('.pixel-row');
        let pixelBoard = document.getElementById('pixel-board');
        for (let index = 0; index < pixelRow.length; index += 1){
            
        }
        pixelBoard.removeChild(pixelRow);
        createBoard(input.value);
    });
}
defineSize ();

//Requisito 11
function sizeBoard () {

}
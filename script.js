const initColorPalette = () => {
  const cores = [
    "#000000",
    "#" + Math.random().toString(16).substr(2, 6),
    "#" + Math.random().toString(16).substr(2, 6),
    "#" + Math.random().toString(16).substr(2, 6),
  ];
  document.querySelectorAll(".color").forEach((element) => {
    element.style.backgroundColor = cores[0];
    cores.shift();
  });
};

initColorPalette();

const config = {
  color: "#000000",
};

document.getElementById("color-palette").addEventListener("click", () => {
  if (event.target.classList.contains("color")) {
    document.querySelectorAll(".color").forEach((element) => {
      element.classList.remove("selected");
    });
    event.target.classList.add("selected");
    config.color = event.target.style.backgroundColor;
  }
});

document.getElementById("pixel-board").addEventListener("click", () => {
  if (event.target.classList.contains("pixel")) {
    event.target.style.backgroundColor = config.color;
  }
});

document.getElementById("clear-board").addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

document.getElementById("generate-board").addEventListener("click", () => {
  const size = document.getElementById("board-size").value;
  if (size.toString().trim() === "") {
    alert("Board inválido!");
  } else {
    boardBuilder(size);
  }
});

const boardBuilder = (size = 5) => {
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  const board = document.getElementById("pixel-board");

  board.innerHTML = "";

  for (let i = 0; i < size; i++) {
    board.innerHTML += `<div class='pixel-row'>`;
    for (let j = 0; j < size; j++) {
      board.innerHTML += `<div class="pixel"></div>`;
    }
    board.innerHTML += `<div>`;
  }
};

// document.getElementById("board-size").addEventListener("change", () => {
//   const size = document.getElementById("board-size").value || 0;

//   if (size < 1) {
//     document.getElementById("board-size").value = 5;
//   }

//   //console.log(document.getElementById("board-size").value);
// });ma

boardBuilder(5);

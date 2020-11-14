let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;


const color = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');

function changeSelected(event) {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
  
  color.addEventListener('click', changeSelected);
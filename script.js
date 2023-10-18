let cell = document.createElement('div'); 
cell.className = 'cell';
let mainContainer = document.querySelector('#main-container');

colorString = "#000000";
colorMode = 'simple';

let rainbowArray= ['#FF0000','#FF8000','#FFFF00','#00FF00','#00ffff','#0000FF','#7F00FF','#FF007F'];

let renderedCell = document.getElementsByClassName('cell')
let selectBox = document.getElementById('select-box');


selectBox.addEventListener("click", function () {
    let selectedOption = selectBox.value;

    if (selectedOption === "Big") {
        render(64, 64);
    }
    if (selectedOption === "Mid") {
        render(32, 32);
    }
    if (selectedOption === "Normal") {
        render(16, 16);
    }
    if (selectedOption === "Little") {
        render(8, 8);
    }
});

render(64,64);

function render(numRows, numCols) {
    mainContainer.innerHTML = "";

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let size = (700 / numRows);
            cell.style.height = (numRows != 8) ? Math.round(size) - 3.2 + "px" : Math.round(size) - 4 + "px";
            cell.style.width = cell.style.height;
            let clone = cell.cloneNode(true);
            mainContainer.appendChild(clone); 

            clone.addEventListener('mouseenter' , function(){
                if (colorMode == 'simple'){
                clone.style.background = colorString;
                }
                if ( colorMode == 'rainbow'){
                    let i = getRandom();
                    clone.style.background = rainbowArray[i];
                }
            });
        }
    }
}

function changeColor(stringColor){
    colorString = stringColor;
    console.log(colorString);
    colorMode = 'simple';
}

function changeMode(stringMode){
    colorMode = stringMode;
}
function getRandom(){
    return Math.floor(Math.random() * 7 );
} 


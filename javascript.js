/*
create a grid of 16x16 square divs;
    a motherdiv containing all divs;
    16 divs in motherdiv containing 16 divs in a row each;

create hover effect for grid;
    hover event listener on cells;
        change color;

create a prompt asking for the number of squares per side;
remove old grid and replace with new;
*/

// reference to html body
const body = document.querySelector('body');

// div containing all divs
const motherDiv = document.createElement('div');
motherDiv.setAttribute('class', 'mother');
body.appendChild(motherDiv);

// create 16 divs on top of each other
for(i = 0; i < 16; i++) {
    let columnDiv = document.createElement('div');
    // only divs with class .row shall be flex boxes, see style.css 
    columnDiv.setAttribute('class', 'column');
    motherDiv.appendChild(columnDiv);

    // add 16 divs inside each rowDiv
    for(j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        columnDiv.appendChild(cell);
    }

    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', e => {
        e.target.classList.add('hovered');
    }));
}




const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', createNewGrid);

function createNewGrid() {
    let numberOfSquares = prompt('How many squares per side?');
    motherDiv.textContent = '';
    for(i = 0; i < numberOfSquares; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.setAttribute('class', 'column');
        motherDiv.appendChild(columnDiv);

        for(j = 0; j < numberOfSquares; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            columnDiv.appendChild(cell);
        }
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', e => {
        e.target.classList.add('hovered');
    }));
}


// const cells = document.querySelectorAll('.cell');
// cells.forEach(cell => cell.addEventListener('mouseover', e => {
//     e.target.classList.add('hovered');
// }));

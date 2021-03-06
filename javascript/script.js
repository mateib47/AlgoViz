let arraySizeValue;
let goal;
let start;
let arrayValues = [];
let dimensionVal = 1;
let matrix;
let isDrawing = false, x, y;

const arraySize = document.getElementsByClassName('size-input');
Array.from(arraySize).forEach(function (element){
    element.addEventListener('change', event =>{
        arraySizeValue = event.target.value;
        if(event.target.id === 'searching-size-input'){
            generateSearchingArray();
        }else if(event.target.id === 'sorting-size-input'){
            generateSortingArray();
        }
    });
});

const dimension = document.getElementsByClassName('dim-radio');
Array.from(dimension).forEach(function (element){
    element.addEventListener('change', event =>{
        dimensionVal = event.target.value;
        let dropdown = document.querySelector('#searching-alg');
        if(dimensionVal == 1){
            dropdown.innerHTML = `
                <option value="sequential">Sequential</option>
                <option value="binary">Binary</option>`;
        }else if(dimensionVal == 2){
            dropdown.innerHTML = `
                <option value="bfs">BFS</option>
                <option value="dfs">DFS</option>
                <option value="astar">A*</option>`;
        }
        if(arraySizeValue){
            generateSearchingArray();
        }  
    });
});

function boxesOnClick(){
    const boxes = document.getElementsByClassName('mx-box');
    Array.from(boxes).forEach(function (element){
        element.addEventListener('click', event =>{
            let coord = event.target.id.split('-').slice(1);
            const cond = ['blue','green'];
            const classList = event.target.classList;
            if(!cond.some(el => Array.from(classList).includes(el))){
                classList.add('black');
                matrix[coord[0]][coord[1]] = -1;
            }
        });
    });
    const canvas = document.querySelector('#array-searching');
    canvas.addEventListener('mousedown', e => {
        x = e.pageX;
        y = e.pageY;
        isDrawing = true;
    });
    canvas.addEventListener('mousemove', e => {
        if (isDrawing === true) {
            let elem = document.elementFromPoint(x,y);
            let elemID = elem.id.split('-');
            let classList = Array.from(elem.classList);
            if(elemID[0] === 'mxbox' && !classList.includes('green') && !classList.includes('blue')){
                elem.classList.add('black');
                matrix[elemID[1]][elemID[2]] = -1
            }
            x = e.pageX;
            y = e.pageY;
        }
    });
//todo when you have to scroll to see the whole matrix, then there are problems with drawing

    window.addEventListener('mouseup', e => {
        if (isDrawing === true) {
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });
}



function generateSearchingArray(){
    eraseArray();
    let arrayHtml = '';
    const array = document.querySelector('#array-searching');
    if(dimensionVal == 1){
        goal = Math.floor(Math.random() * arraySizeValue)
        arrayHtml += '<div class="row">';
        for(let i=0; i<arraySizeValue;i++){
            if(i === goal){
                arrayHtml += '<div class="box green" id="box-'+i+'"></div>';
            }else{
                arrayHtml += '<div class="box" id="box-'+i+'"></div>';
            }
        }
        arrayHtml += '</div>';
    }else{
        matrix = [];
        goal = [Math.floor(Math.random() * arraySizeValue), Math.floor(Math.random() * arraySizeValue)];
        start = [Math.floor(Math.random() * arraySizeValue), Math.floor(Math.random() * arraySizeValue)];
        for(let i=0; i<arraySizeValue;i++){ 
            matrix[i] = [];               
            arrayHtml += '<div class="row">';
            for(let j=0; j<arraySizeValue;j++){
                if(i == goal[0] && j == goal[1]){
                    arrayHtml += '<div class="mx-box green" id="mxbox-'+i+'-'+j+'">&#8226;</div>';
                    matrix[i][j] = 2;
                }else if(i == start[0] && j == start[1]){
                    arrayHtml += '<div class="mx-box blue" id="mxbox-'+i+'-'+j+'">&#8227;</div>';
                    matrix[i][j] = 1;
                }else{
                    matrix[i][j] = 0;
                    arrayHtml += '<div class="mx-box" id="mxbox-'+i+'-'+j+'"></div>';
                }
            }
            arrayHtml += '</div>';
        }
    }
    array.innerHTML += arrayHtml;
    boxesOnClick();
}
function generateSortingArray(){
    eraseArray();
    let arr = [];
    let arrayHTML = '';
    for (let i = 0;i<arraySizeValue;i++){
        arr[i] = i;
    }
    arr = shuffle([...arr]);
    arrayValues=[...arr];
    const array = document.querySelector('#array-sorting');
    for(let i=0; i<arraySizeValue;i++){
            const value = (arr[i]+1)*(100/arraySizeValue);
            arrayHTML += `<div class="bar" id="${'bar-'+i}" style="max-height:${value}% "></div>`;
    }
    array.innerHTML = arrayHTML;
}
function shuffle(array){
    for(let i=0;i<array.length;i++){
        let rand = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
    }
    return array;
}

function eraseArray(){
    document.getElementById('prompt').style.display = 'none';
    const array = document.querySelector('.array');
    array.innerHTML = '';
    const prompts = document.getElementsByClassName('prompt');
    Array.from(prompts).forEach(function (elem){
        elem.style.display = 'none';
    });
}


const newArray = document.getElementsByClassName('new-array');
Array.from(newArray).forEach(function (element){
    element.addEventListener('click', event =>{
        event.preventDefault();
        if(!arraySizeValue){
            alert('Please select the size of the array');
        }else{
            eraseArray();
            if(event.target.id === 'new-array-searching'){
                generateSearchingArray();
            }else if(event.target.id === 'new-array-sorting'){
                generateSortingArray();
            }
        }
    });
});

const searchingForm = document.getElementsByClassName('form');
Array.from(searchingForm).forEach(function (element) {
    element.addEventListener('submit', event => {
        event.preventDefault();
        const lengthInput = event.target.getElementsByClassName('size-input')[0];
        const algTypeInput = event.target.getElementsByClassName('alg-input')[0];
        const  length = lengthInput.value.trim();
        const algType = algTypeInput.value;
        displayArray = [];
        if(algType !== '' && length !== ''){
            switch (algType){
                case 'sequential':
                    sequentialSearch(goal, length);
                    break;
                case 'binary':
                    binarySearch(goal, length);
                    break;
                case 'heap':
                    heapSort(length);
                    break;
                case 'quick':
                    quickSort(length);
                    break;
                case 'merge':
                    mergeSort(length);
                    break;
                case 'bubble':
                    bubbleSort(length);
                    break;
                case 'bfs':
                    bfs(start, goal, matrix);
                    break;
                case 'dfs':
                    dfs(start, goal, matrix);
                    break;
                case 'astar':
                    astar(start, goal, matrix);
                    break;
            }
        }
    });
});




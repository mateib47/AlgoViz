let arraySizeValue;
let toFind;
let arrayValues = [];
let dimensionVal = 1;
let matrix;

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
}



function generateSearchingArray(){
    eraseArray();
    let arrayHtml = '';
    const array = document.querySelector('#array-searching');
    if(dimensionVal == 1){
        toFind = Math.floor(Math.random() * arraySizeValue)
        arrayHtml += '<div class="row">';
        for(let i=0; i<arraySizeValue;i++){
            if(i == toFind){
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
                    arrayHtml += '<div class="mx-box green" id="box-'+i+'-'+j+'">&#8226;</div>';
                    matrix[i][j] = 2;
                }else if(i == start[0] && j == start[1]){
                    arrayHtml += '<div class="mx-box blue" id="box-'+i+'-'+j+'">&#8227;</div>';
                    matrix[i][j] = 1;
                }else{
                    matrix[i][j] = 0;
                    arrayHtml += '<div class="mx-box" id="box-'+i+'-'+j+'"></div>';
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
    for (let i = 0;i<arraySizeValue;i++){
        arr[i] = i;
    }
    arr = shuffle([...arr]);
    arrayValues=[...arr];
    const array = document.querySelector('#array-sorting');
    for(let i=0; i<arraySizeValue;i++){
            const value = (arr[i]+1)*(100/arraySizeValue);
            array.innerHTML += `<div class="bar" id="${'bar-'+i}" style="max-height:${value}% "></div>`;
    }
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
        const lengthInput = event.target[1];
        const algTypeInput = event.target[2];
        const  length = lengthInput.value.trim();
        const algType = algTypeInput.value;
        if(algType !== '' && length !== ''){
            switch (algType){
                case 'sequential':
                    sequentialSearch(toFind, length);
                    break;
                case 'binary':
                    binarySearch(toFind, length);
                    break;
                case 'heap':
                    heapSort(length);
                    break;
                case 'quick':
                    quickSort(length);
                    break;
                case 'merge':
                    mergeSort(length, arrayValues);
                    break;
                case 'bubble':
                    bubbleSort(length);
                    break
            }
        }
    });
});




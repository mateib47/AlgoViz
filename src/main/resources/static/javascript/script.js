import {sequentialSearch, binarySearch} from './algorithms/searching.js';
import {bubbleSort, quickSort, mergeSort, heapSort} from './algorithms/sorting.js';


let arraySizeValue;
let toFind;
let arrayValues = [];

const arraySize = document.getElementsByClassName('size-input');
Array.from(arraySize).forEach(function (element){
    element.addEventListener('change', event =>{
        arraySizeValue = event.target.value
        if(event.target.id === 'searching-size-input'){
            generateSearchingArray();
        }else if(event.target.id === 'sorting-size-input'){
            generateSortingArray();
        }
    });
});


function generateSearchingArray(){
    eraseArray();
    toFind = Math.floor(Math.random() * arraySizeValue)
    const array = document.querySelector('#array-searching');
    for(let i=0; i<arraySizeValue;i++){
        if(i == toFind){
            array.innerHTML += '<div class="box green" id="box-'+i+'"></div>';
        }else{
            array.innerHTML += '<div class="box" id="box-'+i+'"></div>';
        }
    }
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
                    quickSort(arrayValues);
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




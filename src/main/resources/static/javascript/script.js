import {sequentialSearch, binarySearch} from './algorithms/searching.js';

let arraySizeValue;
let toFind;
const arraySize = document.querySelector('#sorting-size-input');

arraySize.addEventListener('change', event =>{
    arraySizeValue = event.target.value
    if(event.target.id === 'new-array-searching'){
        generateSearchingArray();
    }else{
        generateSortingArray();
    }
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
    const array = document.querySelector('#array-sorting');
    for(let i=0; i<arraySizeValue;i++){
            array.innerHTML += `<div class="bar" id="${'bar'+arr[i]}" style="max-height:${arr[i]*10}% "></div>`;
    }
}
function shuffle(array){
    for(let i=0;i<array.length;i++){
        let rand = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
    }
    console.log(array);
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
            }else{
                generateSortingArray();
            }
        }
    });
});

const searchingForm = document.querySelector('#searching-form');
searchingForm.addEventListener('submit', event => {
    event.preventDefault();
    const lengthInput = document.querySelector('#sorting-size-input');
    const algTypeInput = document.querySelector('#searching-alg');
    const  length = lengthInput.value.trim();
    const algType = algTypeInput.value;
    if(algType !== '' && length !== ''){
      if(algType == 'sequential'){
        sequentialSearch(toFind, length);
      }else if(algType == 'binary'){
          binarySearch(toFind, length);
      }
    }
});


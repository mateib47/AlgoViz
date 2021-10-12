import {sequentialSearch, binarySearch} from './algorithms/searching.js';

let arraySizeValue;
let toFind;
const arraySize = document.querySelector('#sorting-size-input');
arraySize.addEventListener('change', event =>{
    arraySizeValue = event.target.value
    generateArray();
});

function generateArray(){
    eraseArray();
    toFind = Math.floor(Math.random() * arraySizeValue)
    const array = document.querySelector('.array');
    for(let i=0; i<arraySizeValue;i++){
        if(i == toFind){
            array.innerHTML += '<div class="box green" id="box-'+i+'"></div>';
        }else{
            array.innerHTML += '<div class="box" id="box-'+i+'"></div>';
        }
    }
}
function eraseArray(){
    const array = document.querySelector('.array');
    array.innerHTML = '';
    document.getElementById('prompt').style.display = 'none';
}


const newArray = document.querySelector('#new-array');
newArray.addEventListener('click', event =>{
    event.preventDefault();
    if(!arraySizeValue){
        alert('Please select the size of the array');
    }else{
        eraseArray();
        generateArray();
    }
});

const form = document.querySelector('#searching-form');
form.addEventListener('submit', event => {
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

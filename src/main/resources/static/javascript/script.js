let arraySizeValue;
const arraySize = document.querySelector('#sorting-size-input');
arraySize.addEventListener('change', event =>{
    arraySizeValue = event.target.value
    generateArray();
});

function generateArray(){
    const toFind = Math.floor(Math.random() * arraySizeValue)
    const array = document.querySelector('.array');
    for(let i=0; i<arraySizeValue;i++){
        if(i == toFind){
            array.innerHTML += '<div class="box green"></div>';
        }else{
            array.innerHTML += '<div class="box"></div>';
        }
    }
}
function eraseArray(){
    const array = document.querySelector('.array');
    array.innerHTML = '';
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
})


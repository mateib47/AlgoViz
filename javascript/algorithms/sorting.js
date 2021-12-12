let mergeCount = 0;
let displayArray = [];
let heapLength;

function initArray(length){
    let array = [];
    for(let i=0;i<length;i++){
        const elem = document.querySelector('#bar-'+`${i}`);
        const value = parseFloat(elem.style.maxHeight)/100.0;
        const percent = elem.style.maxHeight;
        array.push({value, id: i, percent});
    }
    return array;
}
function updateDisplay(result){
    const min = Math.min(...result.map(elem => elem.id));
    for (let i=0; i< result.length;i++){
        result[i].id = i+min;
    }
    let arr = [];
    for(let e of result){
        arr.push([e.id, e.percent])
    }
    displayArray.push(arr);
}
function sortViz() {
    for(let i=0;i<displayArray.length;i++){
        setTimeout(function() {
            for(let e of displayArray[i]){
                document.querySelector('#bar-'+e[0]).style.maxHeight = e[1];
            }
        }, 600 * i);
    }
}
function delay(i) {
    setTimeout(function () {

    }, 300 * i);
}


function bubbleSort(length){
    let count = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < (length-i-1); j++){
            bubbleTask(count, j);
            count++;
        }
    }
}

function bubbleTask(count, i) {
    setTimeout(function() {
        let a = document.querySelector('#bar-'+i);
        let b = document.querySelector('#bar-'+`${i+1}`);
        if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
            let temp = a.style.maxHeight;
            a.style.maxHeight = b.style.maxHeight;
            b.style.maxHeight = temp;
        }
    }, 200 * count);
}


function mergeSort(length){
    let array = initArray(length);
    mergeSorting(array);
    sortViz();
}

function mergeSorting(array){
    const half = array.length / 2;
    if(array.length < 2){
        return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSorting(left), mergeSorting(array));
}

function merge(left, right){
    mergeCount++;
    let arr = [];
    while(left.length && right.length) {
        let val;
        if (left[0].value < right[0].value) {
            val = left.shift();
            arr.push(val);
        } else {
            val = right.shift();
            arr.push(val);
        }
    }
    const result = [...arr, ...left, ...right];
    updateDisplay(result);
    return result;
}


function quickSort(length){
    let array = initArray(length);
    quickSorting(array);
    sortViz();
}

function quickSorting(array){
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];
    let left = [], right = [];
    for(let i=1;i<array.length;i++){
        array[i].value < pivot.value ? left.push(array[i]) : right.push(array[i]);
    }
    const result = [...left,pivot, ...right];
    updateDisplay(result);
    return quickSorting(left).concat(pivot, quickSorting(right));
}


function heapSort(length){
    heapLength = length;
    let array = initArray(heapLength);
    for(let i = Math.floor(heapLength/2);i>=0;i--){
        heapRoot(i, array);
    }
    for (let i = heapLength - 1; i > 0; i--) {
        swap(array, 0, i);
        heapLength--;
        heapRoot(0, array);
        updateDisplay(array)
    }
    sortViz();
}

function heapRoot(i, array){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if(left < heapLength && array[left].value > array[max].value){
        max = left;
    }
    if(right < heapLength && array[right].value > array[max].value){
        max = right;
    }
    if(max !== i){
        swap(array, i, max);
        heapRoot(max, array)
    }
}

function swap(input, a, b){
    let temp = input[a];
    input[a] = input[b];
    input[b] = temp;
}

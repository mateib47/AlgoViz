function bubbleSort(length){
    let sorted = false;
    let count = 0;
    while(count<=length*length){
        sorted = true;
        for(let i = 0;i< length-1;i++){
            bubbleTask(count, length, i)
            count++;
        }
    }
}
function bubbleTask(count, length, i) {
    setTimeout(function() {
        let a = document.querySelector('#bar-'+i);
        let b = document.querySelector('#bar-'+`${i+1}`);
        if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
            let temp = a.style.maxHeight;
            a.style.maxHeight = b.style.maxHeight;
            b.style.maxHeight = temp;
        }
    }, 300 * count);
}

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

let mergeCount = 0;
let displayArray = [];
function mergeSort(length){
    let array = initArray(length);
    mergeSorting(array);
    for(let i=0;i<displayArray.length;i++){
        mergeTask(displayArray[i], i);
    }
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

function mergeTask(array, m) {
   setTimeout(function() {
        for(let e of array){
            document.querySelector('#bar-'+e[0]).style.maxHeight = e[1];
        }
  }, 600 * m);
}

function quickSort(length){
    let array = initArray(length);
    console.log(quickSorting(array));
    for(let i=0;i<displayArray.length;i++){
        mergeTask(displayArray[i], i); //rename this
    }
}
function quickSorting(array){
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0].value;
    let left = [], right = [];
    for(let i=1;i<array.length;i++){
        array[i].value < pivot ? left.push(array[i]) : right.push(array[i]);
    }
 //   updateDisplay(left);
  //  updateDisplay(right); adapt for quicksort
    return quickSorting(left).concat(pivot, quickSorting(right));
}
function delay(i) {
    setTimeout(function () {

    }, 300 * i);
}
function heapSort(){

}
function sortingDone(){
    alert('Done');
}

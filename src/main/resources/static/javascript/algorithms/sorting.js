function bubbleSort(length){
    let sorted = false;
    let count = 0;
    while(count<=length*length){
        sorted = true;
        for(let i = 0;i< length-1;i++){
            task(count, length, i)
            count++;
        }
    }
}

function task(count, length, i) {
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
function quickSort(length){

}
async function mergeSort(length){
    let array = [];
    for(let i=0;i<length;i++){
        array.push({value:parseFloat(document.querySelector('#bar-'+`${i}`).style.maxHeight)/100.0, id: i, percent: document.querySelector('#bar-'+`${i}`).style.maxHeight});
    }
    await console.log(mergeSorting(array));
    for(let i=0;i<display.length;i++){
        mergeTask(display[i], i);
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
let mergeCount = 0;
let display = [];
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
    const min = Math.min(...result.map(elem => elem.id));
    for (let i=0; i< result.length;i++){
        result[i].id = i+min;
    }
    let disp = [];
    for(let e of result){
        disp.push([e.id, e.percent])
    }
    display.push(disp);
    return result;
}
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

function mergeTask(array, m) {
   setTimeout(function() {
        for(let e of array){
            document.querySelector('#bar-'+e[0]).style.maxHeight = e[1];

        }
  }, 600 * m);
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

export {bubbleSort, quickSort, mergeSort, heapSort};

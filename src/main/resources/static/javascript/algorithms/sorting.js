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
        console.log(a+" "+b);
        if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
            let temp = a.style.maxHeight;
            a.style.maxHeight = b.style.maxHeight;
            b.style.maxHeight = temp;
        }
    }, 300 * count);
}
function quickSort(length){

}
let mergeCount = 0;
function mergeSort(length){
    let array = [];
    for(let i=0;i<length;i++){
        array.push({value:parseFloat(document.querySelector('#bar-'+`${i}`).style.maxHeight)/100.0, id: i, percent: document.querySelector('#bar-'+`${i}`).style.maxHeight});
    }
    console.log(mergeSorting(array));
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
    const min = Math.min(...result.map(elem => elem.id))
    for (let i=0; i< result.length;i++){
        result[i].id = i+min;
    }
    mergeTask(result);
    return result;
}
function mergeTask(array) {
    console.log(mergeCount);
    setTimeout(function() {
        for(let e of array){
            document.querySelector('#bar-'+e.id).style.maxHeight = e.percent;
        }
    }, 300*mergeCount);
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

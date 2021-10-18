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

function mergeSort(length){
    let array = [];
    let elements = [];
    for(let i=0;i<length;i++){
        array.push({value:parseFloat(document.querySelector('#bar-'+`${i}`).style.maxHeight)/100.0, id: i});
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
    let arr = [];
    while(left.length && right.length) {
        if (left[0].value < right[0].value) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

function heapSort(length){

}
function sortingDone(){
    alert('Done');
}

export {bubbleSort, quickSort, mergeSort, heapSort};

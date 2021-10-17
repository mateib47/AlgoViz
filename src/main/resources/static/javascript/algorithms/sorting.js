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

}

function heapSort(length){

}

export {bubbleSort, quickSort, mergeSort, heapSort};

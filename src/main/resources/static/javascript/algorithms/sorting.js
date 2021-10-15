function bubbleSort(length){
    let sorted = false;
    for(let i = 0;i<length;i++){
        //console.log(document.querySelector('#bar-'+i));
    }
    while(!sorted){
        sorted = true;
        for(let i = 0;i< length-1;i++){
            let a = document.querySelector('#bar-'+i);
            let b = document.querySelector('#bar-'+`${i+1}`)
            if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
                sorted = false
                //console.log(a.style.maxHeight.valueOf() +'>' +b.style.maxHeight.valueOf());
                let temp = a.style.maxHeight;
                a.style.maxHeight = b.style.maxHeight;
                b.style.maxHeight = temp;
            }
        }
    }
    for(let i = 0;i<length;i++){
        //console.log(document.querySelector('#bar-'+i));
    }
}

function quickSort(length){

}

function mergeSort(length){

}

function heapSort(length){

}

export {bubbleSort, quickSort, mergeSort, heapSort};

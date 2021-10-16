function bubbleSort(length){
    let sorted = false;
    let count = 0;
    while(!sorted){
        sorted = true;
        for(let i = 0;i< length-1;i++){
            if(!task(count, length)){
                sorted = false;
            }
            count++;
        }
    }
}

function task(count, length) {
    console.log(count);
    const i = count % length;
    let sorted = true;
    setTimeout(function() {
        let a = document.querySelector('#bar-'+i);
        let b = document.querySelector('#bar-'+`${i+1}`);
        if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
            sorted = false;
            let temp = a.style.maxHeight;
            a.style.maxHeight = b.style.maxHeight;
            b.style.maxHeight = temp;
        }
    }, 300 * count);
    return sorted;
}//fix it using callback functions probably; the bubblesort function does not wait for task() to return the value.
/*
function bubbleSort(length){
    let sorted = false;
    let counter = 0;
    while(!sorted){
            sorted = true;
        for(let i = 0;i< length-1;i++){
            counter++;
            let a = document.querySelector('#bar-'+i);
            let b = document.querySelector('#bar-'+`${i+1}`);
            if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
                sorted = false;
                    let temp = a.style.maxHeight;
                    a.style.maxHeight = b.style.maxHeight;
                    b.style.maxHeight = temp;
            }
        }
}
}

function delay(i) {
    let a = document.querySelector('#bar-'+i);
    let b = document.querySelector('#bar-'+`${i+1}`);
    setTimeout(function() {
        console.log(i);
        let temp = a.style.maxHeight;
        a.style.maxHeight = b.style.maxHeight;
        b.style.maxHeight = temp;
    }, 300 * i);
}
*/
function quickSort(length){

}

function mergeSort(length){

}

function heapSort(length){

}

export {bubbleSort, quickSort, mergeSort, heapSort};
/*
function bubbleSort(length){
    let sorted = false;
    for(let i = 0;i<length;i++){
        //console.log(document.querySelector('#bar-'+i));
    }
    while(!sorted){
        sorted = true;
        for(let i = 0;i< length-1;i++){
            sorted = task(i);

        }
    }
}

function task(i) {
    let sorted = true;
    setTimeout(function() {
        let a = document.querySelector('#bar-'+i);
        let b = document.querySelector('#bar-'+`${i+1}`);
        if((parseFloat(a.style.maxHeight) / 100.0)>(parseFloat(b.style.maxHeight) / 100.0)){
            sorted = false;
            let temp = a.style.maxHeight;
            a.style.maxHeight = b.style.maxHeight;
            b.style.maxHeight = temp;
        }
        }, 300 * i);
    return sorted;
}
 */

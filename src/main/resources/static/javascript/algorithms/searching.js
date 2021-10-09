function sequentialSearch(toFind, length){
    for(let i = 0; i<length; i++){
        if(i == toFind){
            break;
        }else{
            task(i);
        }
    }
}

function task(i) {
    setTimeout(function() {
        fadeOut(document.querySelector('#box-'+i));
    }, 500 * i);
}

function green(i) {
    document.querySelector('#box-'+i).style.backgroundColor = 'green';
}
function red(i) {
    document.querySelector('#box-'+i).style.backgroundColor = 'red';
}

function binarySearch(toFind, length){//make it recursive
    let l = 0, r = length-1;
    while(l<=r){
        for(let j = 0;j<length;j++){
            if(j >= l && j<=r){
                green(j)
            }else{
                red(j);
            }
        }
        let m = Math.round((l+r)/2);
        if(m == toFind){
            break;
        }else if(toFind < m){
            r = m - 1;
           // task(m);
        }else{
            l = m + 1;
          //  task(m);
        }
    }
}
//FIX binary search
function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.3){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
export {sequentialSearch, binarySearch};

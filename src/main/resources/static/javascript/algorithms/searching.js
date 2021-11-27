function sequentialSearch(toFind, length){
    for(let i = 0; i<length; i++){
        if(i == toFind){
            elementFound(toFind);
            break;
        }else{
            task(i);
        }
    }
}

function task(i) {
    setTimeout(function() {
        fadeOut(document.querySelector('#box-'+i));
    }, 300 * i);
}

function green(i, d) {
    setTimeout(function() {
        document.querySelector('#box-'+i).style.backgroundColor = '#F2EB8D';
    }, 300*d);
}
function red(i, d) {
    setTimeout(function() {
        document.querySelector('#box-'+i).style.backgroundColor = '#F2B05E';
    }, 300*d);

}

function binarySearch(toFind, length){//make it recursive
    let l = 0, r = length-1, depth = 0;
    while(l<=r){
        depth+=4;
        for(let j = 0;j<length;j++){
            if(j >= l && j<=r && j!=toFind){
                green(j, depth)
            }else if(j!=toFind){
                red(j, depth);
            }
        }
        let m = Math.round((l+r)/2);
        if(m == toFind){
            elementFound(toFind, depth);
            break;
        }else if(toFind < m){
            r = m - 1;
        }else{
            l = m + 1;
        }
    }
}
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

function elementFound(found, depth){
    if (!depth) depth = found;
    setTimeout(function() {
        document.getElementById('prompt').style.display = 'block';
        const foundBox = document.querySelector('#box-'+found);
        foundBox.style.backgroundColor = '#45A978';
        foundBox.style.transform = 'scale(1.5, 1.5)';
    }, 300 * depth);
}

let directions = [[-1,0],[0,1],[1,0],[0,-1]];

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

function bfs(start, goal, m){
    let steps = [];
    let matrix = [...m];
    let frontier = [];
    frontier.push(start);
    while(frontier.length > 0){
        let neighbours = [];
        let node = frontier.shift();
        let x = node[0];
        let y = node[1];
        if (matrix[x][y] === 2){
            break;
        }
        for(let i=0;i < 4; i++){
            let xn = x + directions[i][0];
            let yn = y + directions[i][1];
            if(xn < matrix.length && yn < matrix[0].length && xn >= 0 && yn >= 0){
                let next = matrix[xn][yn];
                if(next === 0){
                    matrix[xn][yn] = -2;
                    frontier.push([xn,yn]);
                    neighbours.push([xn,yn]);
                }else if(next === 2){
                    frontier.push([xn,yn]);
                }
            }
        } 
        steps.push(neighbours);
    }
    visualise(steps);
}

//todo in some cases, dfs goes around and cannot find
// the path because some node is already explored so it
// gets blocked and cannot find the route even if there is one; implement backtracking

function dfs(start,goal,m){
    let steps = [];
    let matrix = [...m];
    let frontier = [];
    frontier.push(start);
    while(frontier.length > 0){
        let neighbours = [];
        let node = frontier.pop();
        let x = node[0];
        let y = node[1];
        if (matrix[x][y] === 2){
            console.log("success dfs");
            console.log(matrix);
            break;
        }else if (matrix[x][y] !== 1){
            matrix[x][y] = -2;
        }
        for(let i=0;i < 4; i++){
            let xn = x + directions[i][0];
            let yn = y + directions[i][1];
            if(xn < matrix.length && yn < matrix[0].length && xn >= 0 && yn >= 0){
                let next = matrix[xn][yn];
                if(next === 0 && !includesCoord(xn,yn,frontier)){
                    frontier.unshift([xn,yn]);
                    neighbours.push([xn,yn]);
                    break;
                }else if(next === 2){
                    frontier.push([xn,yn]);
                }
            }
        }
        steps.push(neighbours);
    }
    visualise(steps);
}


function astar(start, goal, m){
    let steps = [];
    let matrix = [...m];
    let frontier = [];
    frontier.push(start);
    while(frontier.length > 0){
        let node = frontier.shift();
        let x = node[0];
        let y = node[1];
        if (matrix[x][y] === 2){
            break;
        }
        let estimations = [];
        for(let i=0;i < 4; i++){
            let xn = x + directions[i][0];
            let yn = y + directions[i][1];
            if(xn < matrix.length && yn < matrix[0].length && xn >= 0 && yn >= 0){
                let next = matrix[xn][yn];
                if(next === 0){
                    let h = Math.abs(xn - goal[0]) + Math.abs(yn - goal[1]);
                    estimations.push({x:xn,y:yn,h:h});
                }else if(next === 2){
                    frontier.push([xn,yn]);
                    break;
                }
            }
        }
        estimations.sort(function (a, b) {
            return a.h - b.h
        })
        let min = [estimations[0].x,estimations[0].y];
        matrix[estimations[0].x][estimations[0].y] = -2;
        frontier.push(min);
        steps.push([min]);
    }
    visualise(steps);
}


function includesCoord(x,y, array){
    for(let e of array){
        console.log(e+" "+x+" "+y);
        if(x === e[0] && y === e[1])
            return true;
    }
    return false;
}

function visualise(steps){
    for(let i=0; i < steps.length;i++){
        setTimeout(function () {
            for(let j=0; j < steps[i].length; j++){
                let x = steps[i][j][0];
                let y = steps[i][j][1];
                document.querySelector('#box-'+x+'-'+y).style.backgroundColor = '#F8DE7E';
                setTimeout(function () {
                    document.querySelector('#box-'+x+'-'+y).style.backgroundColor = '#4D8C57';
                }, 20 * i);
            }
        }, 30 * i);
    }
}

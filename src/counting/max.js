let maxCache = 0;
let lastMax = 0;

function solution(N, A) {

    let counters = buildCounters(N);

    for (let i = 0; i < A.length; i++){
        fill(counters, A[i], N);
    }
    finalize(counters);
    return counters;
}


function fill(counters, value, N) {

    if (value < N + 1) {
        let index = value - 1;
        if (counters[index] < lastMax) {
            counters[index] = lastMax;
        }
        let val =counters[index] + 1;
        counters[index] = val;
        if (val>maxCache){
            maxCache=val;
        }
    } else {
        maximize();
    }

}

function maximize() {
    lastMax=maxCache;
}

// don't do that
function buildCounters(N) {

    let counters = []
    counters[N - 1] = 0;
    counters.fill(0, 0, N - 1);

    return counters;
}

function finalize(counters){
    for (let i = 0; i < counters.length; i++){
        if(counters[i]< lastMax ){
            counters[i]=lastMax;
        }
    }
}

console.log(solution(5,[3,4,4,6,1,4,4,6]));
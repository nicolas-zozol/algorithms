function solution(A, B) {

    //test case 0 or 1 segment
    if (A.length ===0){
        return 0;
    }
    if (A.length ===1){
        return 1;
    }

    let N = B.length-1;

    let currentSet = [N];
    let lastSmallerSegment=null;
    let smallerSet=[];
    let current = N;
    let previous=current;
    for (let segment = N - 1; segment >= 0; segment--) {

        current=segment;


        if (overlap(A,B,previous, current)) {

            if(lastSmallerSegment!==null && !overlap(A,B,lastSmallerSegment,current)){
                smallerSet=[...smallerSet, current];
            }

            if (smallerSet.length >= currentSet.length){
                console.log('switching from', currentSet, 'to ', smallerSet);
                previous=current;
                let temp = currentSet;
                currentSet = smallerSet;
                smallerSet=temp;
                lastSmallerSegment=smallerSet[smallerSet.length-1];

            }

        }else{
            currentSet.push(current);
            console.log('adding to current', currentSet, 'smaller remains ', smallerSet);
            previous=current;
        }

    }

    return currentSet.length;
}


function overlap(A,B,previous, current) {
    let overlap = A[previous]<=B[current];
     console.log(previous, current, A[previous],B[current], overlap);
     return overlap;
}


// should be 4 ?
let A =[0,2,5,8,1], B =[1,3,6,10,12];


// no over lapping: -> 4
//let A =[0,3,6,9], B =[2,5,8,12];


// one big overlap in middle -> 4
//let A =[0,3,6,0,9], B =[2,5,8,11,12];

// all overlapping ; should be 1
//let A =[1,3,3,1], B =[4,5,6,6];

console.log(solution(A,B));

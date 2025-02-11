let dots = [];
const results = {};
let count = 0;

function solution(A) {

    for (let disc = 0; disc<A.length;disc++){
        let radix = A[disc];
        fillDisc(disc, radix);
        if( count === -1){
            return -1;
        }
    }
    return count;
}


function fillDisc(disc, radix) {
    for (let dot = disc-radix; dot <= disc + radix; dot++) {
        if (dot>=0){
            addValue(disc, dot);
            buildResult(dot, disc)
            if(count ===-1){
                break;
            }
        }

    }
   // buildResultTree(disc, radix)
}


function addValue(disc, i){

    let values = dots[i];
    if (values ===undefined){
        values =[];
        dots[i] = values;
    }

    values.push(disc);
    //console.log(JSON.stringify([disc, i]));

}


function buildResultTree(disc, radix){

    for (let dot = disc-radix; dot <=disc+radix ; dot++ ){
        if (dot < 0){
            continue;
        }
        let values = dots[dot];


        for(let i = 0 ; i < values.length-1;i++ ){
            let smaller = values[i];
            if(results[smaller]===undefined){
                results[smaller]={};
                results[smaller][disc]=true;
                count++;
            }else{
                if (results[smaller][disc] !==true){
                    results[smaller][disc] =true;
                    count++;
                }
            }
        }
        results[disc]={};
    }
    if (count> 10000000){
        count = -1;
    }
}

function buildResult(dot, disc){
    let values = dots[dot];


    for(let i = 0 ; i < values.length-1;i++ ){
        let smaller = values[i];
        if(results[smaller]===undefined){
            results[smaller]={};
            results[smaller][disc]=true;
            count++;
        }else{
            if (results[smaller][disc] !==true){
                results[smaller][disc] =true;
                count++;
            }
        }
    }
    results[disc]={};
    if (count> 10000000){
        count = -1;
    }
}
/*
console.log(solution([1,0,2,0]));
console.log(results);*/
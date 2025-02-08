


function solution(U, L, C) {
    // write your code in JavaScript (Node.js 8.9.4)

    let up = [];
    let down =[];

    let countUpper =0;
    let countLower =0;

    for (let i =0; i < C.length;i++){
        if(C[i] ===0){
            up[i]=0;
            down[i]=0;
        }

        if(C[i] ===2){
            up[i]=1;
            down[i]=1;
            countLower++
            countUpper++
        }

        if (C[i] ===1){
            if(U===countUpper && L === countLower){
                return 'IMPOSSIBLE';
            }
            //fill the closer
            if( L-countLower< U-countUpper ){//fill up
                up[i]=1;
                down[i]=0;
                countUpper++
            }else{
                up[i]=0;
                down[i]=1;
                countLower++
            }
        }
    }

    //check
    let sum=0
    for (let i=0;i <up.length;i++){
        sum+=up[i];
    }
    if (sum !== U){
        return  'IMPOSSIBLE';
    }

    sum=0
    for (let i=0;i <down.length;i++){
        sum+=down[i];
    }
    if (sum !== L){
        return  'IMPOSSIBLE';
    }

    let result='';
    for (let i=0; i<up.length; i++){
        result+=up[i];
    }
    result +=',';

    for (let i=0; i<down.length; i++){
        result+=down[i];
    }

    return result;

}


//let U=2, L=2, C=[1,1,1,1];
let U=0, L=2, C=[0,1,0,1];
console.log(solution(U,L,C));

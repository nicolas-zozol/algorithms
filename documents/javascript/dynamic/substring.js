

function solution(X, Y){

    let small, big;



    if (X.length<Y.length){
        small = X;
        big = Y;
    }else{
        small = Y;
        big = X;
    }

    if (small.length ===0){
        return 0;
    }
    if (small.length ===1){
        return big.includes(small) ? 1 : 0;
    }

    let dp=[];
    dp[0]= big.includes(small.charAt(0)) ? 1 :0;

    for (let i = 1; i < small.length ; i++){


        let previous =dp[i-1];
        let len = previous+1;

        let sub=small.substring( i-len+1, i+1);

        console.log({previous, len, sub});

        dp[i] = big.includes(sub) ? len : dp[i-1];

    }


    return dp[dp.length-1];


}
//let X = 'erezel', Y= 'hellozel';
//let X = 'abcdxyz', Y= 'xyzabcd';
//let X = 'zxabcdezy', Y= 'yzabcdezx';
let X = 'w', Y= 'yzabcdezx';
console.log(solution(X, Y));
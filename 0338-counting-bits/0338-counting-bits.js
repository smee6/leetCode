/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let list = [];
    for(let i =0; i<=n; i++){
        list.push(i);
    }
    console.log(list)
    let newList = list.map(e=>e.toString(2));
    let answer = [];
    
    let cnt =0;
    while(cnt<=n){
        answer.push(0);
        cnt++
    }

    console.log(newList)
    newList.forEach((e,idx)=>{
        for(let letter of e){
            if( letter == 1) answer[idx] += 1;
        }
    })

    return answer
};
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack = [];
    let answer = [];

    for (let i=1; i<=n; i++){
        if (JSON.stringify(target) == JSON.stringify(stack)) continue;
        stack.push(i);
        answer.push("Push");

        if(!target.includes(i)) {
            stack.pop();
            answer.push("Pop");
        }
    }
    
    return answer;
};

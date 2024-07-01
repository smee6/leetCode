/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    asteroids.forEach((a,i)=>{
        if (stack.legnth == 0 || a > 0) {
            stack.push(a);
        } else {
            while(true){
                if (stack.length == 0 || stack[stack.length-1] < 0) {
                    stack.push(a);
                    break;
                } else {
                    if (a*-1 > stack[stack.length-1]){
                        stack.pop();
                    } else if (a*-1 ==stack[stack.length-1]){
                        stack.pop();
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    });

    return stack;
};
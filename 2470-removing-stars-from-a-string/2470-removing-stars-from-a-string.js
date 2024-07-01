/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];

    for(let c of s) {
        if ( c !== "*"){
            stack.push(c);
        } else {
            if (stack.length != 0){
                stack.pop();
            }
        }
    }
    return stack.join('');
   
};
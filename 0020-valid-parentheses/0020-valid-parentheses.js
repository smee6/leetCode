/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    if (s.length % 2 != 0) return false;

    for (let e of s) {
        if(e === "(" || e === "{" || e === "[") { 
            stack.push(e);
        } else {
            let last = stack.pop();
            if (map[last] != e) return false;
        } 
    }
    
    return stack.length > 1 ? false : true;

}
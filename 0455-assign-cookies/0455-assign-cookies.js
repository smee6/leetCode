/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let content = 0;
    g.sort((a,b)=>b-a);
    s.sort((a,b)=>b-a);

    while (g.length >0) {
    if(s[0]>=g[0]){
        s.shift();
        g.shift();
        content ++;
    } else {
        g.shift();
    }
    }

    return content;


};
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function(g, s) {
//     let content = 0;
//     g.sort((a,b)=>b-a);
//     s.sort((a,b)=>b-a);

//     while (g.length >0) {
//         if(s[0] >= g[0]){
//             s.shift();
//             g.shift();
//             content ++;
//         } else {
//             g.shift();
//         }
//     }
//     return content;
// };

var findContentChildren = (g,s) => {
    // let's implement two-pointer method below
    let content = 0;
    let ptG =0 , ptS = 0;
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    while (ptG <= g.length && ptS <= s.length) {
        if (s[ptS] >= g[ptG]) {
            ptS ++;
            ptG ++;
            content ++;
        } else {
            ptS ++
        }
    }
    return content;
}
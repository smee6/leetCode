/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let s1 = []
    let s2 = []
    dfs(root1,s1);
    dfs(root2,s2);

    let res1 = s1.filter(e=>e<0);
    let res2 = s2.filter(e=>e<0);

    return res1.join() == res2.join()
};

function dfs(root,result) {
    if (!root) return result;
    if(!root.left && !root.right) {
        result.push(root.val*-1)
    } else {
        result.push(root.val);
    }
    dfs(root.left,result);
    dfs(root.right,result);
}
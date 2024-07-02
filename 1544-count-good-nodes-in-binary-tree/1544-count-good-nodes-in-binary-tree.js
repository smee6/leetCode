/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    return dfs(root, root.val);
};

function dfs(node, maxVal) {
    if (!node) return 0;

    let good = node.val >= maxVal ? 1 : 0;

    maxVal = Math.max(maxVal, node.val);

    good += dfs(node.left, maxVal);
    good += dfs(node.right, maxVal);

    return good;
}
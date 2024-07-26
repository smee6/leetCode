/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = Array.from(Array(m), () => Array(n).fill(-1));

    function dfs(x, y) {
        if (x === m - 1 && y === n - 1) {
            return 1;
        }
        if (x >= m || y >= n) {
            return 0;
        }

        if (memo[x][y] !== -1) {
            return memo[x][y]; 
        }
        
        memo[x][y] = dfs(x + 1, y) + dfs(x, y + 1);
        
        return memo[x][y];
    }

    return dfs(0, 0);
};
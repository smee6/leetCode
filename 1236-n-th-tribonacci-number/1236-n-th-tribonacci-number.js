/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let memo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }

    return memo[n];
};
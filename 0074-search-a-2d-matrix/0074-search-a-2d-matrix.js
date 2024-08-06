/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let arr = matrix.flat();
    let start = 0;
    let end = arr.length -1;

    while (start<=end) {
        let mid = Math.floor((start + end)/2);

        if (arr[mid] == target) return true;
        else if (arr[mid] > target) end = mid-1;
        else start = mid + 1;
    }
    return false;
    

};
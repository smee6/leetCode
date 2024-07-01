/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const cnt_map = new Map();
    for (const num of nums) {
        if (cnt_map.has(num)) {
            cnt_map.set(num, cnt_map.get(num) + 1);
        } else {
            cnt_map.set(num, 1);
        }
    }

    let majorityElement, maxCount = 0;

    for (const [num, count] of cnt_map) {
        if (count > maxCount) {
            majorityElement = num;
            maxCount = count;
        }
    }

    return majorityElement;
};
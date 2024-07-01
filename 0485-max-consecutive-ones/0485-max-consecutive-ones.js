/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCon = 0;
    let con = 0;
    nums.map((e)=>{
        if(e === 0) {
            con = 0;
        }else {
            con++;
            if (con>=maxCon) maxCon = con;
        }
    });

    return maxCon;
};
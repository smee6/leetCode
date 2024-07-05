/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let keyMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    
    let result = [];

    if (digits.length === 0) {
        return result;
    }

    for (let i = 0; i < digits.length; i++) { 
        let digit = digits[i];
        let letters = keyMap[digit];

        if (result.length === 0) {
            result = letters;
        } else {
            let temp = [];
            for (let j = 0; j < result.length; j++) {
                for (let k = 0; k < letters.length; k++) {
                    temp.push(result[j] + letters[k]);
                }
            }
            result = temp;
        }
    
    }

    return result;
};
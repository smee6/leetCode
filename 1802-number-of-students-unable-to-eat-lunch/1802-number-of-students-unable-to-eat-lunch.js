/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let retry = 0;
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            retry = 0;
        } else {
            let temp = students.shift();
            students.push(temp);
            retry++;
        }
        if (retry === students.length) {
            break;
        }
    }
    return students.length
};
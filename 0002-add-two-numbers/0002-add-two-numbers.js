/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1_stack = [];
    let num2_stack = [];
    let cal_stack = [];

    numPack(l1,num1_stack);
    numPack(l2,num2_stack);

    let num1 = BigInt(num1_stack.reverse().join(''));
    let num2 = BigInt(num2_stack.reverse().join(''));

    let result_num = (num1 + num2).toString();

    let result = new ListNode(0);
    let current = result;
    
    for (let i = result_num.length - 1; i >= 0; i--) {
        current.next = new ListNode(parseInt(result_num[i]));
        current = current.next;
    }

    return result.next;
};

function numPack(node, stack) {
    while (true) {
        if (node == null || node.val == null) break;
        stack.push(node.val);
        node = node.next;
    }
    return stack;
}
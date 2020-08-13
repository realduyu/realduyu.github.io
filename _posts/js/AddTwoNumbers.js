/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function printList(l){
    console.log(l.val);
    if(l.next) printList(l.next);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return null; 
    let n = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if(n > 9){
        if(!l1.next) l1.next = new ListNode(0);
        l1.next.val += 1;
        n = n-10;
    }
    return new ListNode(n,addTwoNumbers(l1,l2));
};
var addTwoNumbers2 = function(l1, l2) {
    function add(l1,l2,ex = 0){
        if(!l1 && !l2 && !ex) return null; 
        let n = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ex;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if(n > 9){
            ex = 1;
            n = n-10;
        }else{
            ex = 0;
        }
        return new ListNode(n,add(l1,l2,ex));
    }
    return add(l1,l2);
};
let l1 = new ListNode(1,new ListNode(7,new ListNode(3)));
let l2 = new ListNode(1,new ListNode(3,new ListNode(7)));


let l3 = addTwoNumbers2(l1,l2);
printList(l3);
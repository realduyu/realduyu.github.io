/* 
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l2 || l1;
    if(l1.val < l2.val){
        return new ListNode(l1.val,mergeTwoLists(l1.next,l2));
    }else{
        return new ListNode(l2.val,mergeTwoLists(l1,l2.next));
    }
};
let l1 = new ListNode(1,new ListNode(2,new ListNode(4)));
let l2 = new ListNode(1,new ListNode(3,new ListNode(5)));

let l3 = mergeTwoLists(l1,l2);
printList(l3);

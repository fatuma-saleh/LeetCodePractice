/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let mid = head,start = head,counter = 1;
    while(start.next){
    
    ++counter
   if(counter%2=== 0){
       mid =mid.next
   }
        start = start.next
    }
    
  
    return mid
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(let num of nums){
        if(num !== val){
            nums[k] = num
             k++
        }
       
    }
    return k
};
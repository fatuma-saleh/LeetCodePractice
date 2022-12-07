/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  
    for(let i = 0;i< nums.length;i++){
        if(nums[i] === target){
           let pos = i
        
        while(pos < nums.length && nums[pos]==target){
            pos++
        }
        return [ i, pos-1 ]
        }
    }
        return[ -1,-1 ]
};

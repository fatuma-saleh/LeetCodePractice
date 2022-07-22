/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let suml=0,tot=0;
    
    for(let i=0;i<nums.length;i++){
        tot+=nums[i]
    }
          for(let i=0;i<nums.length;i++){
           const sumr=tot-suml-nums[i]
            if(suml==sumr){
                return i
            }
              suml+=nums[i]
        }
    
    return -1
};
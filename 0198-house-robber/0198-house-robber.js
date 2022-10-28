/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let temparr = [];
    if(nums.length===1) return nums[0];
       
    temparr[0] = nums[0]
    temparr[1] = Math.max(nums[0],nums[1])
  for(let i = 2;i<nums.length;i++){
        temparr[i]=Math.max(temparr[i-1],nums[i]+temparr[i-2]);
        
    }
    return temparr[nums.length-1]
};
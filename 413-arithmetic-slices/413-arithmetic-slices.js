/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let current = 0,count = 0;
    for(let i = 2;i<nums.length;i++){
        if(nums[i]- nums[i-1] === nums[i-1]-nums[i-2]){
        current+=1;
        count+=current;
    }else{
        current= 0;
        
    }
    }
    return count
};
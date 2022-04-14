/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr =[],zero = 0
   for(let i = 0;i<nums.length;i++){
       if(nums[i] !== 0){
           arr.push(nums[i])
       }else{
           
           zero ++
       }
   }
    for(let i = 0;i<nums.length;i++){
        if(arr[i]){
            nums[i]=arr[i]
        }else
            {
                nums[i]=0
            }
        
    }
    return arr;
};
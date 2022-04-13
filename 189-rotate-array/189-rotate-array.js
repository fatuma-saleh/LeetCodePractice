/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
if(nums.length < k){
   k = k % nums.length 
    }
    let newArray = nums.splice(nums.length-k,k)
    nums = nums.unshift(...newArray)
    

    return nums
};
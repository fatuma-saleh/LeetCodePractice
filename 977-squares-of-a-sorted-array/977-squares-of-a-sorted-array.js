/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArr = []
    for(let i = 0;i < nums.length;i++){
        newArr.push(Math.pow(nums[i],2))
    }
    return newArr.sort((a,b) => a-b)
};
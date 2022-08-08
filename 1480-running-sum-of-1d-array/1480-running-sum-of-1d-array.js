/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[],sum=0;
    
    for(let num of nums){
       sum =sum+num
        arr.push(sum)
    }
    return arr
};
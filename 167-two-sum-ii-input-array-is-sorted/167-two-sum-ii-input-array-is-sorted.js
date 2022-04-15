/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let i = 0,n = numbers.length-1;
  
   while(i<n){
       if(numbers[i]+numbers[n]===target){
           return [i+1,n+1]
       }else if(numbers[i] + numbers[n] > target){
           n--
       }else if(numbers[i] + numbers[n] < target){
           i++
       }
   }
    
};
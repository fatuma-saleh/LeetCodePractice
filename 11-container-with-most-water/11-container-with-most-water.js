/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length-1,left = 0,maxarea = 0;
  while(left <right ){
      let width = right - left
      maxarea = Math.max(maxarea,Math.min(height[left],height[right])*width)
      if(height[left]<=height[right]){
          left++
      }else{
          right--
      }
      }
  
    return maxarea;
};
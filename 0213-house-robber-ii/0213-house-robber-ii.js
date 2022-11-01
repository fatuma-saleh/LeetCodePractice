/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const rob_helper = function(nums,start,end){
     let temparr = [];
    temparr[0] = nums[start]
    temparr[1] = Math.max(nums[start],nums[start+1])
  for(let i = start+2;i<=end;i++){
         temparr[i-start]=Math.max(nums[i]+temparr[i-start-2],temparr[i-start-1])
  }
      return temparr[end - start]       
    
    }
    if(nums.length === 0)return 0;
   if(nums.length === 1) return nums[0];
   if(nums.length === 2) return Math.max(nums[0],nums[1]);
   let m = rob_helper(nums,0,nums.length-2); 
   let n = rob_helper(nums,1,nums.length-1);   
    return(Math.max(m,n))
}; 
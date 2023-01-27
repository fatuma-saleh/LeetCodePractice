/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let median,valeven,valodd;
    merged = nums1.concat(nums2);
    merged.sort((a,b) => a-b)
    for(let i = 0;i< merged.length;i++){
    if((merged.length)%2 !=0){
        valeven = (merged.length+1) /2
        median = merged[valeven-1]
    }else{
        valodd = (merged.length) /2
        median =( merged[valodd] + merged[valodd-1])/2
    }
    } 
    return median
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pos = nums1.length-1;
    for(let num2 of nums2){
        nums1[pos]=num2
        pos--
    }
    nums1.sort((a,b) =>a-b)
};
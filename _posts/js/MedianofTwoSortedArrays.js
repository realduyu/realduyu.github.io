/* 
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let mix = [];
    for (let i = 0; i < len; i++) {
        if(nums1.length == 0 && nums2.length == 0) break;
        if(nums1.length == 0 || nums2.length == 0) mix.push(nums1.length == 0 ? nums2.pop() : nums1.pop());
        else if(nums1[nums1.length-1] > nums2[nums2.length-1]){
            mix.push(nums1.pop());
        }else{
            mix.push(nums2.pop());
        }
    }
    console.log(mix);
    if(mix.length == 0) return 0;
    if(mix.length%2==0) return (mix[mix.length/2-1] + mix[mix.length/2])/2;
    else return mix[(mix.length-1)/2];
};
var findMedianSortedArrays2 = function(nums1, nums2) {
    
    let len = nums1.length + nums2.length;
    let mix = [];
    for (let i = 0; i < len; i++) {
        let n1 = nums1.pop();
        let n2 = nums2.pop();
        if(n1 == undefined && n2 == undefined) break;
        else if(n1 == undefined || n2 == undefined) mix.push(n1 != undefined ? n1 : n2);
        else if(n1 > n2) {
            mix.push(n1);
            nums2.push(n2);
        }else{
            mix.push(n2);
            nums1.push(n1);
        }
    }
    if(mix.length == 0) return 0;
    if(mix.length%2==0) return (mix[mix.length/2-1] + mix[mix.length/2])/2;
    else return mix[(mix.length-1)/2];
}

var findMedianSortedArrays3 = function (nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const middle = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
      ? (merged[middle] + merged[middle - 1]) / 2
      : merged[middle];
};

let nums1 = [1,2];
let nums2 = [2,3];

let median = findMedianSortedArrays(nums1,nums2);
console.log(median);
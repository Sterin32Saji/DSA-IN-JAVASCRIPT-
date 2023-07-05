// problem link-> https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let addValue = 0.0;
  const mergedArray = [...nums1, ...nums2];
  const arrayLength = mergedArray.length;
  if (arrayLength % 2 === 0) {
    return mergedArray[arrayLength / 2] + addValue;
  } else {
    return (
      mergedArray[arrayLength / 2] + mergedArray[arrayLength / 2 + 1] + addValue
    );
  }
};

let nums1 = [1, 3];
let nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));

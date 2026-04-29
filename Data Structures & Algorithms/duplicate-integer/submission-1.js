class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const result = !!nums.some((el, index) => nums.findLastIndex(val => val === el) !== index)

        return result;
    }
}

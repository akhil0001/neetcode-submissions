class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let result = [];
        nums.forEach((el, index) => map.set(el, index));
        for(let index = 0; index < nums.length; index++){
            const diff = target - nums[index];
            if(map.has(diff) && index !== map.get(diff)){
                result = [index, map.get(diff)]
                break;
            }
        }
        return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i=0; i<nums.length; i++) {
            const el = nums[i]
            if(map.has(el)){
                map.set(el, map.get(el)+1);
            }
            else {
                map.set(el, 1);
            }
        }
        let result = [];
        map.forEach((val, key) => {
            result.push([key, val])
        });
        return result.sort((a, b) => b[1] - a[1]).slice(0, k).map(el => el[0])
    }
}

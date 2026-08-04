class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for (const value of set) {
            const prev = value - 1;
            if (set.has(prev)) {
                continue;
            }
            let next = value + 1;
            let length = 1;
            while (set.has(next)) {
                length++;
                next = next + 1;
            }
            longest = Math.max(length, longest);
        }
        return longest;
    }
}

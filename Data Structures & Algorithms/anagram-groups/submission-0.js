class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let i = 0; i < strs.length; i++) {
            const chars = strs[i].split("");
            const count = new Array(26).fill(0);
            for (let char of strs[i]) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = count.join(",");
            const val = map[key] ?? [];
            map[key] = [...val, strs[i]];
        }
        return Object.values(map);
    }
}

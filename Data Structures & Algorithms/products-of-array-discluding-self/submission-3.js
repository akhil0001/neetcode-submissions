class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalMul = 1;
        let hasZero = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i] !== 0){
            totalMul = totalMul * nums[i];
            }
            else {
                hasZero++;
            }
            if(hasZero === nums.length){
                totalMul = 0;
            }
        }
        return nums.map(el => {
            if(hasZero === 1) {
                return el === 0 ? totalMul : 0;
            }
            if(hasZero > 1){
                return 0;
            }
            
            return totalMul/el
        })
    }
}

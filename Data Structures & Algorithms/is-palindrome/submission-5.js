class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let result = true;
      
        const pattern = /[a-z0-9]/g;
        const str = s.trim().toLowerCase().match(pattern);
        if(!str){
            return true;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const revChar = str[str.length - (i + 1)];
            if (char !== revChar) {
                result = false;
                break;
            }
        }
        return result;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
            return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('') === t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
    }
}

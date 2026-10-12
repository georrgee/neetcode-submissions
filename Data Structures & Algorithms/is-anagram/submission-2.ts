class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * expect an empty string
     * do characters count like are we skipping numberic or blank spaces
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false;

        if (s.length === 1 && t.length === 1) {
            return s[0] === t[0]
        } 

        const charMap = new Map(); // letter (str) : count (num)

        for (const char of s) {
            charMap.set(char, (charMap.get(char) ?? 0) + 1)
        }

        for (const char of t) {

            if (charMap.has(char)) {
                charMap.set(char, (charMap.get(char) - 1))
            }
        }

        for (const [key, value] of charMap) {
            if (value !== 0) return false
        }


        // anagram has to be the same amount of characters
        // racecar 
        // racecar 

        return true;
    }
}

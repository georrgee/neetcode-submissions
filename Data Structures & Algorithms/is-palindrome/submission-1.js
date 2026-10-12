class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let leftIndex = 0;
        let rightIndex = s.length - 1;

    while (leftIndex < rightIndex) {

        while (leftIndex < rightIndex && !this.isAlphanumeric(s[leftIndex])) {
            leftIndex++;
        }

        while (rightIndex > leftIndex && !this.isAlphanumeric(s[rightIndex])) {
            rightIndex--;
        }

        if (s[leftIndex].toLowerCase() !== s[rightIndex].toLocaleLowerCase()) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

        return true;
    }

    isAlphanumeric(ch) {
        return (ch >= 'A' && ch <= 'Z' || 
        ch >= 'a' && ch <= 'z' || 
        ch >= '0' && ch <= '9')
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

    const combinedString = s.split(' ').join('').toLowerCase();
    
    const newString = combinedString.replace(/[^a-zA-Z0-9 ]/g, "");

    let leftIndex = 0;
    let rightIndex = newString.length - 1;
    
    while (leftIndex <= rightIndex) {
        const firstChar = newString[leftIndex];
        const secondChar = newString[rightIndex];
        
        if (firstChar !== secondChar) return false;
        
        leftIndex++;
        rightIndex--;
    }
    
    return true;
    }
}

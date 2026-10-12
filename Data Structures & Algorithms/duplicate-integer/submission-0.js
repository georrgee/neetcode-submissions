class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set_of_numbers = new Set();

        for (let num of nums) {
            
            if (set_of_numbers.has(num)) {
                return true
            } else {
                set_of_numbers.add(num)
            }
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0;
        let right = numbers.length - 1;


        while (left < right) {

            const totalCurrentSum = numbers[left] + numbers[right];
            const doesAddUpToTarget = totalCurrentSum === target;

            if (doesAddUpToTarget) {
                return [left + 1, right + 1]
            } else if (totalCurrentSum < target) {
                left++
            } else {
                right--;
        }
    }
        return []
    }
}

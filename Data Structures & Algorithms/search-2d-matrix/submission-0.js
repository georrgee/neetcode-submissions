class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        if (matrix.length === 0 || matrix[0].length === 0) return false;

        const rowLength = matrix.length; // 3
        const colLength = matrix[0].length; // 4

        let leftIndex = 0;
        let rightIndex = (rowLength * colLength) - 1; // 11 

        while (leftIndex <= rightIndex) {
            const midIndex = leftIndex + (Math.floor((rightIndex - leftIndex) / 2));

            const row = Math.floor(midIndex / colLength);
            const col = midIndex % colLength;
            const value = matrix[row][col];

            if (value === target) {
                return true;
            } else if (value < target) {
                leftIndex = midIndex + 1;
            } else {
                rightIndex = midIndex - 1;
            }
        }

        return false;
    }
}

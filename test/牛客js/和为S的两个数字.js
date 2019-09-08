function FindNumbersWithSum(array, sum) {
    let left = 0, right = array.length - 1, res = [];
    while (left < right) {
        if (array[left] + array[right] === sum) {
            res.push(array[left], array[right])
            return res;
        } else if (array[left] + array[right] > sum) {
            right--;
        } else {
            left++;
        }
    }
    return res;
}

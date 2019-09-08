function FindContinuousSequence(sum) {
    if (sum === 0) return [];
    if (sum === 3) return [[1, 2]];
    let midIndex = Math.ceil(sum/2);
    let left = 1, right = 2, sumCurr = 3;
    let arr = [1, 2], res = [];
    while (left <= midIndex && right <= midIndex && left < right) {
        if (sumCurr < sum) {
            right++;
            arr.push(right);
            sumCurr += right;
        } else if (sumCurr > sum) {
            sumCurr -= arr[0];
            left++;
            arr.shift();
        } else {
            res.push(arr.slice());
            right++;
            arr.push(right);
            sumCurr += right;
        }
    }
    return res;
}

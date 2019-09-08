function FindGreatestSumOfSubArray(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    let res = -Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        let arr = array.slice(i);
        arr.reduce((prev, curr) => {
            res = Math.max(res, prev + curr, arr[0]);
            return prev + curr;
        })
    }
    return res;
}

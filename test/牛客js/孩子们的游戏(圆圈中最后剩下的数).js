function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) return -1;
    let i = -1, step = 0, count = n, arr = [];
    while (count > 0) {
        i++;
        if (i === n) i = 0;
        if (arr[i] === -1) continue;
        step++;
        if (step === m) {
            arr[i] = -1;
            step = 0;
            count--;
        }
    }
    return i;
}

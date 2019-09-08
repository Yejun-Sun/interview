function LeftRotateString(str, n) {
    if (!str || n < 0 || n > str.length) return '';
    let arr = str.split('');
    let left = arr.slice(0, n);
    let right = arr.slice(n, str.length);
    return [...right, ...left].join('');
}

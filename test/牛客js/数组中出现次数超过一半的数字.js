function MoreThanHalfNum_Solution(numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];
    let halfLen = Math.floor(numbers.length/2);
    numbers.sort((a,b)=>a-b);
    let count = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i+1]) {
            count++;
            if (count > halfLen) {
                return numbers[i];
            }
        } else {
            count = 1;
            continue;
        }
    }
    return 0;
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));

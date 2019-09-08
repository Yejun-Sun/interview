function IsContinuous(numbers) {
    if (numbers.length <= 0) return false;
    let count = 0;
    numbers.sort((a, b)=>a-b);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            count++;
        } else {
            break;
        }
    }
    for (let i = count; i < numbers.length-1; i++) {
        let minus = numbers[i + 1] - numbers[i];
        if (minus > 1) {
            count = count - minus + 1;
        } else if (minus === 0) {
            return false;
        }
    }
    return count >= 0 ? true : false;
}

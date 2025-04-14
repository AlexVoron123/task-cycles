export function rangeSum(start, end) {
    let sum = 0;
    if (start > end) {
        [start, end] = [end, start];
    }
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a /= 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    let result = '';
    let index = 0;

    do {
        if ((index + 1) % 3 === 0) {
            result += '_';
        } else {
            result += message[index];
        }
        index++;
    } while (index < message.length);

    return result;
}

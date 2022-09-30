// Your code here.
function range(start, end, step) {
    if (step === undefined) {
        step = 1;
    }
    let arr = [];
    let exit = false;
    let i = start;
    do {
        arr.push(i);
        if (start > end) {
            i = i + step;
            if (end > i ) exit = true;
        } else {
            i = i + step;
            if (i > end) exit = true;
        };

    } while (exit !== true)
    return arr;
}

function sum(arr) {
    let accumulatedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        accumulatedSum += arr[i];
    }
    return accumulatedSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
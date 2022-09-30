/**
 *Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
 */
function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

function reverseArrayInPlace(arr){
    let midPoint;
    // if(arr.length % 2 === 0) midPoint = -1;
    midPoint = Math.ceil(arr.length /2);
    
    let startCur =0;
    let endCur = arr.length - 1;
    do{
        let valAtStartCur = arr[startCur];
        arr[startCur] = arr[endCur];
        arr[endCur] = valAtStartCur;
        startCur++;
        endCur--;
    }while(startCur<midPoint)
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
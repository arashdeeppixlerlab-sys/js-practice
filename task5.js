// 42. Create a function that will return a Boolean value indicating if two circles are intersecting
// Hint: Find distance between centers and compare with sum of radii.
// Array Example:
// [x1, y1, r1] , [x2, y2, r2]
function isIntersect(x1, y1, x2, y2, R1, R2) {
    let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    if (distance <= R1 - R2) {
        console.log("Circle B is inside A.");
        return false;
    }
    else if (distance <= R2 - R1) {
        console.log("Circle A is inside b.");
        return false;
    }
    else if (distance < R1 + R2) {
        console.log("Circle intersects each other.");
        return true;
    }
    else if (distance == R1 + R2) {
        console.log("Circle A and B are in touch with each other.");
        return false;
    }
    else {
        console.log("Circle A and B do not overlap");
        return false;
    }
}
console.log(isIntersect(-10, 8, 14, -24, 30, 10));


// 43. Extract a column from a 2D array
// Hint: Loop through rows and pick the same column index.
// Array Example:
// [[1,2,3],[4,5,6],[7,8,9]] → column 1 → [2,5,8]

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function extractColumn(columnIndex) {
    let column = [];
    for (let row of array) {
        column.push(row[columnIndex])
    }
    return column;
}
console.log(extractColumn(1));



//  44. Convert binary string to number
// Hint: Treat string as array of characters and calculate value.
// Array Example:
// "1011" → ['1','0','1','1'] → 11


function calculateBinary(text) {
    let arr = [...text];
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let binary = arr[i] * Math.pow(2, (arr.length - 1 - i));
        console.log(binary);
        sum += binary
    }
    return sum;
}
console.log(calculateBinary("1011"));


// 45. Sum of numbers in a jagged array
// Hint: If element is array, go inside it; if number, add it.
// Array Example:
// [1,[2,[3,4]],5] → 15
function sum(array) {
    let total = 0;
    for (let item of array) {
        if (Array.isArray(item)) {
            total += sum(item);

        }
        else {
            total += item;
        }
    }
    return total;
}

console.log(sum([1, [2, [3, 4]], 5]))


// 46. Find max number in a jagged array
// Hint: Traverse all nested arrays and compare values.
// Array Example:
// [1,[10,[25,3]],7] → 25
let arr2 = [1, [10, [25, 3]], 7, 90]
let newArray = arr2.flat(2).reduce((prev, curr) => {
    return prev > curr ? prev : curr
});

console.log("Max number in this jagged array is :", newArray);

// 47. Deep copy a jagged array
// Hint: Create new array and copy nested arrays separately.
// Array Example:
// [1,[2,[3]]] → new independent copy

function copy(array) {
    let newarr = [];
    for (let item of array) {
        if (Array.isArray(item)) {
            newarr.push(copy(item));

        }
        else {

            newarr.push(item);
        }
    }
    return newarr;
}
console.log(copy([1, [2, [3]]]));



// 48. Find longest word in a string
// Hint: Split string into array and compare word lengths.
// Array Example:
// "I love JavaScript" → ["I","love","JavaScript"]


// *by using for loop
function longestWord(string) {
    let arr2 = string.split(" ");
    let longString = "";
    for (let i = 0; i < arr2.length; i++)
        if (arr2[i].length > longString.length) {
            longString = arr2[i];
        }
    return longString;
}
console.log("largest word among this string  is:", longestWord("I love JavaScript "));

// *by using reduce method :
function longestWord(string) {
    let arr2 = string.split(" ");

    let longString = arr2.reduce((pre, curr) => {
        return pre.length > curr.length ? pre : curr
    })


    return longString;
}
console.log("largest word among this string  is:", longestWord("I love JavaScript "));

//49. Shuffle an array of strings
// Hint: Swap elements using random index.
// Array Example:
// ["a","b","c","d"] → ["c","a","d","b"]

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;

}
console.log("shuffled array is :", shuffleArray(["a", "b", "c", "d"]));



// 50. Unique random numbers from 1 to n
// Hint: Generate random numbers and avoid duplicates.
// Array Example:
// n = 5 → [3,1,5,2,4]
let n = 5;
let array1 = [];
while (array1.length < n) {
    let r = Math.floor(Math.random() * n + 1);
    if (!array1.includes(r)) {
        array1.push(r)
    }
}
console.log(array1);


// 51. Letter frequency in a string
// Hint: Count letters and store as array pairs.
// Array Example:
// "hello" → [["h",1],["e",1],["l",2],["o",1
function frequency(string) {
    let count = {};
    let arr4 = [];
    for (let item of string) {
        count[item] = (count[item] || 0) + 1;
    }
    for (let key in count) {
        arr4.push([key, count[key]])
    }
    return arr4;
}

console.log(frequency("hello"));



// 52. Fibonacci(500)
// Hint: Use BigInt to store large numbers.
// Array Example:
// 0, 1, 1, 2, 3, 5, ...

function Fibonacci(num) {
    let a = 0n, b = 1n;
    for (let i = 0n; i < num; i++) {
        let c = a + b;
        // console.log(c)
        a = b;
        b = c;
    }
    return a;
}
console.log(Fibonacci(500n));



// 53. Calculate 70!
// Hint: Multiply numbers from 1 to 70 using BigInt.
// Array Example:
// 70 × 69 × 68 × ... × 1
function factorial(num) {
    if (num <= 1n) return 1n;
    return num * factorial(num - 1n);
}
console.log(factorial(70n))






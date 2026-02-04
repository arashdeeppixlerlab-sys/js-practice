// 30. Create a function that will add two positive numbers of indefinite size.
// The numbers are received as strings and the result should also be provided as a string. 

function bigNumbers(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? Number(a[i]) : 0;
        let digit2 = j >= 0 ? Number(b[j]) : 0;
        let sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        j--;
        i--;
    }
    return result;
}
console.log(bigNumbers("123456789", "987654321"));



// 31. Create a function that will return the number of words in a text.

function countWords(text) {
    let result = text.split(" ")

    return result.length;
}
console.log(countWords("I love JavaScript"));


// 32. Create a function that will capitalize the first letter of each word in a text.

function capitalize(string) {
    return string.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    });

}
console.log(capitalize("i love javascript"));

//  33. Calculate the sum of numbers received in a comma-delimited string.
let numbers = "12,12,12"
let count = 0
numbers.split(",").map((c) => {
    count += Number(c)
})

console.log(count);


// by using a function:
let string = "12,12,12";
function sum(string) {

    return string.split(",").reduce((pre, curr) => {
        return Number(pre) + Number(curr)

    })

}

console.log(sum(string));






// 34. Create a function that returns an array of words from a text.


function arrayOfWords(text) {
    // let result =[];

    let result = text.split(/[, ;]+/);

    return result;
}
console.log(arrayOfWords("I   love new  JS"));




// 35. Create a function to convert a CSV text into a two-dimensional array.
// Example:

let text =
    "John;Smith;954-080-0800\n" +
    "Mich;Tiger;305-000-0000\n" +
    "Monique;Vasquez;103-000-0000";
function textTo2dArray(text) {

    let result = text.split('\n').map(value => value.split(";"));
    return result;
}
console.log(textTo2dArray(text));



// 36. Create a function that converts a string into an array of characters.

function arrayConversion(text) {
    let result = text.split("")
    return result;
}
console.log(arrayConversion("hello"))



// 37. Create a function that converts a string into an array of ASCII codes of each character.
function stringToCode(text) {
    let result = [];
    for (let index in text) {
        let code = text.charCodeAt(index)
        result.push(code);
    }
    return result;
}
console.log(stringToCode("abc"));



// 38. Create a function that converts an array of ASCII codes into a string.
function codeToString(value) {
    let char = "";

    for (let val of value) {

        char += String.fromCodePoint(val)
    }
    return char;
}
console.log(codeToString([65, 66, 67]));



// 39. Implement the Caesar Cipher.
// (Shift each character by a fixed number)
function encrypt(text, s) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
        result += ch;
    }
    return result;
}
console.log(encrypt("ABCD", 2));


// 40. Implement the Bubble Sort algorithm for an array of numbers.

function bubleSort(array) {

    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return array;
}
console.log(bubleSort([1, 4, 5, 3, 2]));


// 41. Create a function to calculate the distance between two points defined by their (x, y) coordinates.
function distance(a1, b1, a2, b2) {
    let result = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2));
    return result;
}
console.log(distance(4, 3, 3, 4));





//Question 22. Reverse an array:
let array = [1, 2, 3, 4, 5];
console.log(array.reverse());


//Question 23. Reverse a string:
let string = "Hello";
console.log(string.split("").reverse());


// Question 24. Create a function that will merge two arrays and return the result as a new array :
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let newArray = [];
function mergeArray(a, b) {
    return newArray.push(arr1 + "," + arr2);
}
mergeArray(arr1, arr2)
console.log(newArray);


//Question 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

let array1 = [1, 2, 3, 4, 5, 6, 8];
let array2 = [5, 6, 7, 8];
const diffrent = (array1, array2) => {
    let newArray1 = [];
    for (let value of array1) {
        if (!array2.includes(value)) {
            newArray1.push(value);
        }
    }
    for (let value of array2) {
        if (!array1.includes(value)) {
            newArray1.push(value);
        }
    }

    return newArray1

}
console.log(diffrent(array1, array2))


// Question 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second  
let Num1 = [1, 2, 3, 4, 5, 6, 7];
let Num2 = [5, 6, 7, 8, 9];

const firstArray = (a, b) => {
    let newArray = [];
    for (let element of Num1) {
        if (!Num2.includes(element)) {
            newArray.push(element)
        }
    }
    return newArray;
}
console.log(firstArray(Num1, Num2));



// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3]

const distinctElements = (arr) => {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < arrNew.length; j++) {
            if (arr[i] == arrNew[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arrNew.push(arr[i]);
        }

    }

    return arrNew;
}
console.log(distinctElements(arr))

// Another way
const distinctElement = (arr) => {
    let arrNew = [];

    for (let value of arr) {
        if (!arrNew.includes(value)) {
            arrNew.push(value);
        }
    }

    return arrNew;
};
console.log(distinctElement(arr))







//Question 28. Calculate the sum of first 100 prime numbers and return them in an array:

let count = 0;
let sum = 0;
let i = 2;
let primeNumbers = [];
while (count < 100) {
    let j = 2;
    let isPrime = true;
    while (j < i) {
        if (i % j == 0) {
            isPrime = false;
        }
        j++;
    }
    if (isPrime) {
        primeNumbers.push(i);
        sum += i;

        count++;
    }

    i++;

}
console.log(primeNumbers);
console.log(`Total of 1st 100 prime number is ${sum}`);

// Question 29. Print the distance between the first 100 prime numbers
let total = 0;
let distance = 0;
let ist = 2;
let primeNumber = [];
while (total < 100) {

    let j = 2;
    let isPrime = true;
    while (j < ist) {
        if (ist % j == 0) {
            isPrime = false;
        }
        j++;
    }
    if (isPrime) {
        primeNumber.push(ist);
        total++;
        if (primeNumber.length > 1) {
            let lastElement = primeNumber[primeNumber.length - 2]
            distance = ist - lastElement;
            console.log(`distance between ${ist} and ${lastElement} is ${distance}`);
        }

    }

    ist++;
}


// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string
function bigInt(a, b) {
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
        i--;
        j--;
    }
    return result;
}
console.log(bigInt("123456789", "987654321"))












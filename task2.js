// Question 12 :  function that receives an array  and returns an array containing only the positive numbers
const arr = [8, -112, 1, 2, 3, 4, 5, -7, 0, -8]
const positiveNumbers = arr.filter((value) => {
    return value > 0;
})
console.log(positiveNumbers);

// another way:
let positives = [];
const arr2 = [8, -112, 1, 2, 3, 4, 5, -7, 0, -8]
for (let a of arr2) {
    if (a > 0) positives.push(a);
}
console.log(positives);




//Question 13: to find maxmimum number in array :
const array = [8, 9, 5, 1, 7, 3, 0]


const maxNum = array.reduce((accum, curr) => {
    return accum > curr ? accum : curr
})

console.log(`${maxNum} is the maximum number of this array `);






//Question 14: Print the first 10 Fibonacci numbers without recursion
// first two values of fibbonacci:
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);

for (let i = 0; i < 8; i++) {
    //  next value  will be sum of previous two values
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;//replacing values 
}





// Question 15: find the nth Fibonacci number using recursion
function fibonacci(number) {

    if (number <= 1)
        return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(5));





// 16. Create a function that will return a Boolean specifying if a number is prime
let primeN = 13;

const isPrime = (primeN) => {
    let count = 0;
    for (let i = 1; i <= primeN; i++) {
        if (primeN % i == 0) {
            count += 1;
        }
    }

    if (count == 2) {

        console.log(`${primeN} is a prime number`);
        return true;

    }
    else {
        console.log(`${primeN} is not a prime number.`);
        return false;

    }
}
console.log(isPrime(primeN))




// Question 17: sum of the integers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((prev, curr) => {
    return prev + curr;
})
console.log(sum);

// 18. Print the first 100 prime numbers
let count = 0;
let num = 2;
while (count < 100) {
    let j = 2;
    let isPrimeN = true;
    while (j < num) {
        if (num % j == 0) {
            isPrimeN = false;
        }

        j++;
    }
    if (isPrimeN) {
        console.log(num);
        count++;
    }
    num++;
}




// 19. Create a function   that will return in an array the first “p” prime numbers greater than “n”. Example: n = 10, p = 5

const getPrime = (n, p) => {
    let start = n + 1;
    let primeNums = [];
    while (primeNums.length < p) {
        let j = 2;
        let isPrime = true;
        while (j < start) {
            if (start % j == 0) {
                isPrime = false;
            }
            j++;
        }
        if (isPrime) {
            primeNums.push(start)

        }
        start++;
    }
    return primeNums;

}
console.log(getPrime(10, 5));



// 20. Rotate an array to the left 1 position. Example array: [1, 2, 3, 4]
const array1 = [1, 2, 3, 4, 5];
let k = 1;
for (let i = 1; i <= k; i++) {
    array1.push(array1.shift())
}
console.log(array1);



//  21. Rotate an array to the right 1 position Example array: [1, 2, 3, 4]
const array2 = [1, 2, 3, 4, 5];
k = 1;
for (let i = 1; i <= k; i++) {
    array2.unshift(array2.pop())
}
console.log(array2);


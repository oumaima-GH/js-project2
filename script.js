// Reverse a String: Write a function that reverses a given string.

let myString = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings, installing plugins, and possibly tweaking the appearance. Here's a basic guide: Install Neovim: If you haven't already installed Neovim, you can do so via the terminal using:"

function reverseString(myString) {
    let reversedString = "";

    for (let i = myString.length - 1; i >= 0; i--) {
        reversedString += myString[i];
    }

    return reversedString;
}

console.log(reverseString(myString));

/**********************************************************************************************************************/

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}

let string = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings";
console.log(countCharacters(string)); 

/**********************************************************************************************************************/


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    let result = ''
    let capitalizeNext = true

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i]
        if (char === ' ') {
            capitalizeNext = true
            result += char
        } else {
            if (capitalizeNext) {
                result += char.toUpperCase()
                capitalizeNext = false
            } else {
                result += char.toLowerCase()
            }
        }
    }

    return result
}

const sentence = "involves configuring its settings, installing plugins, and possibly tweaking the appearance.";
console.log(capitalizeWords(sentence))


/**********************************************************************************************************************/


// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMaximum(arr) {
    if (arr.length === 0) {
        return "Empty array"
    }

    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

function findMinimum(arr) {
    if (arr.length === 0) {
        return "Empty array"
    }

    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}


let numeros = [114, 2, 79, 10, 9, 80];
console.log("Maximum:", findMaximum(numeros))
console.log("Minimum:", findMinimum(numeros))



/**********************************************************************************************************************/


// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let nums = [1, 2, 3, 4, 5]
console.log(sumArray(nums))


/**********************************************************************************************************************/



// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        filteredArray.push(arr[i])
      }
    }
    return filteredArray
  }
  
  const numbers = [1, 21, 23, 40, 51, 60, 71, 88, 9, 100]
  
  const evenNumbers = filterArray(numbers)
  console.log(`Even numbers: ${evenNumbers}`)
  
  


/**********************************************************************************************************************/


// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i
        }
        return result
    }
}

let numb = 6
console.log("Factorial of", numb, "is", factorial(numb))


/**********************************************************************************************************************/



// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(number) {
    if (number <= 1) {
        return false
    }

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

let num = 17
console.log('is ' + num + ' prime? ' + isPrime(num))



/**********************************************************************************************************************/


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function generateFibonacci(nb) {
    let fibonacciSeq = [0, 1];

    for (let i = 2; i < nb; i++) {
        fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }

    return fibonacciSeq;
}

const nb = 13;
const fibonacciSequence = generateFibonacci(nb);
console.log(`Fibonacci sequence up to ${nb}:`, fibonacciSequence);


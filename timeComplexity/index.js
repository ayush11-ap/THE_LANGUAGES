//variable
//  function call 
//  allocation function
//  data structure 


function createMatrix(n) {
    let matrix = Array.from({ length: n }, () => new Array(n));  // O(n^2)
    return matrix;
}

//  let res = createMatrix(10)
//  console.log(res)

// 1 .  

function sumArray(arr) {
    let sum = 0; // s o(1)
    for (let i = 0; i < arr.length; i++) { // T o (n)
        sum += arr[i]; // o(1)  , 0(n)
    }
    return sum;
}
//  o(n + n +1 ) -- > o(n)  , sO(1)

function factorial(n) {
    if (n === 0) return 1; //o(1)
    return n * factorial(n - 1); //o(n)
}

// ? o(n) , s o(n)

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }


function findMax(arr) {
    let max = arr[0]; // o(1)
    for (let i = 1; i < arr.length; i++) { // O(n)
        if (arr[i] > max) {  //o(1)
            max = arr[i]; // o(1)
        }
    }
    return max;
}

// T o(n +1) -- . O(n)
//  s O(1)


function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) { // O(N)
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

//  S 1 , T N 

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// T , 1 , s (n-1+n-2) -- (n)


function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) { //o(n)
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

//  t o(n+m) , s (n+m) --   


function findDuplicates(arr) {
    let seen = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {  // 
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}
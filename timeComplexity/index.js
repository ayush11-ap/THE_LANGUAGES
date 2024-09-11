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

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
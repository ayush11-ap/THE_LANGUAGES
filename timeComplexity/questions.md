
1. **Loop Over Array**
   ```javascript
   function loopOverArray(arr) {
       for (let i = 0; i < arr.length; i++) {
           console.log(arr[i]);
       }
   }
   ```
   - **Time Complexity:** O(n)  
   - **Space Complexity:** O(1)

   (The function iterates over the array once, using a constant amount of space for the loop counter `i`.)

2. **Nested Loops**
   ```javascript
   function nestedLoops(n) {
       for (let i = 0; i < n; i++) {
           for (let j = 0; j < n; j++) {
               console.log(i, j);
           }
       }
   }
   ```
   - **Time Complexity:** O(n^2)  
   - **Space Complexity:** O(1)

   (Two nested loops, each running `n` times, but only constant space is used for the loop counters.)

3. **Loop With Conditional**
   ```javascript
   function loopWithCondition(arr) {
       for (let i = 0; i < arr.length; i++) {
           if (arr[i] % 2 === 0) {
               console.log(arr[i]);
           }
       }
   }
   ```
   - **Time Complexity:** O(n)  
   - **Space Complexity:** O(1)

   (The loop runs `n` times, but the space remains constant since no extra memory is allocated.)

4. **Variable Assignment in Loop**
   ```javascript
   function variableAssignment(arr) {
       let total = 0;
       for (let i = 0; i < arr.length; i++) {
           total += arr[i];
       }
       return total;
   }
   ```
   - **Time Complexity:** O(n)  
   - **Space Complexity:** O(1)

   (The loop iterates over the array, but only a fixed amount of space is used for the variable `total`.)

5. **Logarithmic Search (Binary Search)**
   ```javascript
   function binarySearch(arr, target) {
       let left = 0;
       let right = arr.length - 1;
       while (left <= right) {
           let mid = Math.floor((left + right) / 2);
           if (arr[mid] === target) {
               return mid;
           } else if (arr[mid] < target) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
       return -1;
   }
   ```
   - **Time Complexity:** O(log n)  
   - **Space Complexity:** O(1)

   (The search halves the array size each iteration, and only a fixed amount of space is used for `left`, `right`, and `mid`.)

6. **Condition Inside Nested Loops**
   ```javascript
   function conditionInNestedLoops(n) {
       for (let i = 0; i < n; i++) {
           for (let j = 0; j < n; j++) {
               if (i === j) {
                   console.log(i, j);
               }
           }
       }
   }
   ```
   - **Time Complexity:** O(n^2)  
   - **Space Complexity:** O(1)

   (Two nested loops with an if condition, but the space complexity remains constant as no additional data is stored.)

7. **Exponential Growth (Recursive Function)**
   ```javascript
   function exponentialGrowth(n) {
       if (n <= 0) return;
       exponentialGrowth(n - 1);
       exponentialGrowth(n - 1);
   }
   ```
   - **Time Complexity:** O(2^n)  
   - **Space Complexity:** O(n)

   (Each call generates two recursive calls. The recursion depth is `n`, so the space complexity is O(n) due to the stack.)

8. **Single Loop with Linear Operation**
   ```javascript
   function singleLoopLinearOperation(arr) {
       for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < 10; j++) {
               console.log(arr[i]);
           }
       }
   }
   ```
   - **Time Complexity:** O(n)  
   - **Space Complexity:** O(1)

   (The outer loop runs `n` times, and the inner loop runs a constant 10 times. Space usage is constant since no new memory is allocated.)

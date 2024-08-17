# JavaScript Array Methods: `map`, `filter`, and `reduce`

## 1. `map` Method
The `map` method creates a new array by applying a function to every element in the original array. The original array remains unchanged.

### Example:
```javascript
let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map(num => num + 10);
console.log(mappedNumbers); // Output: [11, 12, 13, 14, 15]
```

- **Key Point:** The `map` method always returns an array with the same number of elements as the original array.
- **Important Note:** If you use `{}` with `map`, you must include a `return` statement; otherwise, the function will return `undefined`.

## 2. `filter` Method
The `filter` method creates a new array containing only the elements that satisfy a condition (return `true`).

### Example:
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = numbers.filter(num => num > 4);
console.log(filteredNumbers); // Output: [5, 6, 7, 8, 9, 10]
```

- **Key Point:** The `filter` method will return an array containing only the elements that pass the condition.
- **Important Note:** If no elements satisfy the condition, `filter` returns an empty array.

## 3. `reduce` Method
The `reduce` method applies a function to accumulate array elements into a single value.

### Example:
```javascript
let numbers = [2, 3, 4, 5];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 14
```

- **Key Point:** The `reduce` method can be used to perform operations like summing the elements of an array or concatenating strings.
- **Important Note:** The second argument in `reduce` is the initial value for the accumulator (`acc`).

## 4. Differences Between `map`, `filter`, and `reduce`

- **`map`:** Transforms each element of the array and returns a new array with the same number of elements.
- **`filter`:** Filters out elements based on a condition and returns a new array with fewer or equal elements.
- **`reduce`:** Reduces the entire array to a single value based on a function.



### Visualizing `map`, `filter`, and `reduce`:

1. **`map`**:
   - Input: [1, 2, 3]
   - Process: +10 for each element
   - Output: [11, 12, 13]

2. **`filter`**:
   - Input: [1, 2, 3, 4, 5]
   - Condition: num > 3
   - Output: [4, 5]

3. **`reduce`**:
   - Input: [2, 3, 4]
   - Process: sum of all elements
   - Output: 9


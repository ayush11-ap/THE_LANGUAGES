### **Parts of OOP: Language-Specific Features in JavaScript**

---

#### **1. Object Literals:**

Object literals allow you to create objects using key-value pairs directly. Here's an example:




```js
let user = {
    name: "Akshay",
    age: 23,
    cars: {
        name: "ff"
    },
    isLoggedIn: false,
    isUserLoggedIn: function () {
        console.log(this.isLoggedIn);
    }
};
```

##### **Key Points:**
- You can access properties using dot (`.`) notation or bracket (`[]`) notation.
    ```js
    console.log(user.cars.name);      // Output: ff
    console.log(user['cars']['name']); // Output: ff
    ```
- You can add, update, or delete properties.
    ```js
    user.address = "tc";  // Adding a new property
    user.name = "Siddhant";  // Updating a property
    delete user.age;  // Deleting a property
    console.log(user);
    ```

##### **`this` Keyword in Object Methods:**
- The `this` keyword refers to the current object in which it is used. In object methods, it references the object itself.
    ```js
    user.isUserLoggedIn();  // Output: false
    ```

---

#### **2. `this` Keyword in Different Contexts:**

The `this` keyword behaves differently in various contexts. Here's a summary in table format:

| **Context**                | **Browser**                   | **Node.js**                 | **Explanation**                                                                  |
|----------------------------|-------------------------------|-----------------------------|----------------------------------------------------------------------------------|
| **Global Scope**            | `window` object               | `{}` (empty object)          | In a browser, `this` refers to the global `window` object. In Node, it's `{}`.   |
| **Inside a Function**       | `window` object               | Global object                | In a browser, `this` refers to `window`. In Node, it refers to the global object.|
| **Arrow Function**          | Parent `this` (lexical scope) | Parent `this` (lexical scope)| Arrow functions do not have their own `this`; they inherit it from the parent.   |
| **Object Method**           | Object itself                 | Object itself                | In both cases, `this` refers to the object the method belongs to.                |
| **Event Listener (Browser)**| Event's target element        | Not applicable               | In the browser, `this` refers to the element that received the event.            |

---

#### **3. Constructor Functions:**

Constructor functions are used to create multiple instances of an object with the same structure. It’s like a blueprint for creating objects.

**Example:**
You need to create many students with properties like name, roll number, and marks, as well as methods to get or update their marks.

```js
function Students(name, rollNo, marks) {
    this.stdName = name;
    this.rollono = rollNo;
    this.marks = marks;
}
```

##### **Key Points:**
- **Instances:** You can create multiple student objects using the `new` keyword, which automatically links the created objects to the constructor's prototype.
    ```js
    let student1 = new Students("xyz", 21, 100);
    let student2 = new Students("abc", 23, 10);
    ```
- **Instance and Constructor Link:** Each created object is an instance of the constructor function.
    ```js
    console.log(student1 instanceof Students);  // Output: true
    ```


##### **Why Use `new` Keyword?**

- When you use `new`, it does three important things:
  1. **Creates a new object** (empty initially).
  2. **Sets the `this` context** to the newly created object.
  3. **Links the object to the constructor's prototype**, enabling inheritance.

Without the `new` keyword, `this` inside the constructor function would not point to the new object, causing errors or unexpected behavior.

**Example (Without `new`):**

```js
let student1 = Students("xyz", 21, 100);
console.log(student1);  // Output: undefined (because `this` is not linked)
```

When `new` is not used, the function doesn’t return the created object, leading to unexpected results. The function runs as a normal one and returns `undefined`.

**Example (With `new`):**

```js
let student2 = new Students("abc", 23, 10);
console.log(student2);  // Output: { stdName: 'abc', rollono: 23, marks: 10 }
```

---


---

### **Summary:**

- **Object Literals**: Create objects directly using `{}`. You can add, modify, and delete properties.
- **`this` Keyword**: Behaves differently in various contexts. In methods, it refers to the object, while in event listeners, it refers to the element triggering the event.
- **Constructor Functions**: Blueprints for creating multiple objects. Use `new` to create instances, which links the object to the constructor’s prototype. Without `new`, `this` won’t refer to the new object, leading to incorrect behavior.

# Java The language 
---
## Creator
- **James Gosling, Mike Sheridan, and Patrick Naughton** at Sun Microsystems in 1995.
  
<div style="display: flex; align-items: center;">
    <div style="margin-right: 20px;">
        <h3>James Gosling</h3>
        <img src="https://imgs.search.brave.com/rcuKZSpjHq2FIX2nQCd7uIZnS1iWxONjJIiQf9Zg5yY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE0L0phbWVzX0dv/c2xpbmdfMjAwOC5q/cGc" alt="James Gosling" width="200" height="200">
    </div>
    <div>
        <h3>Mike Sheridan</h3>
        <img src="https://imgs.search.brave.com/T23NSd225_KBidOoaYdVRZV5WHKywmL7bChW9oKKc-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9md21l/ZGlhLmZhbmRvbXdp/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA3LzMw/MTYxMjA4L0pvbmF0/aGFuLUJhbmtzLWFz/LU1pa2UtRWhybWFu/dHJhdXQtZnJvbS1C/cmVha2luZy1CYWQt/Q3JlZGl0LUFNQy5q/cGc" alt="Mike Sheridan" width="200" height="200">
    </div>
</div>

---
## Uses of Java

1. **Web Applications**: 
   - Server-side applications
   - Frameworks: Spring, JavaServer Faces (JSF), Apache Struts (MVC)

2. **Mobile Development**: 
   - Android SDK
   - Kotlin

3. **Desktop Applications**: 
   - Swing (GUI)
   - JavaFX

4. **Other Applications**: 
   - Enterprise Systems: Provides a large-scale platform for building enterprise applications
   - Embedded Systems
   - Scientific Systems

---

## Operators and Data Types

### 1. Operators

#### Types of Operators

- **Arithmetic Operators**: Perform arithmetic operations. Can be binary or unary.
  - **Binary Operators**: Operate on two operands. Examples:
    - Addition: `a + b`
    - Subtraction: `a - b`
    - Multiplication: `a * b`
    - Division: `a / b`
    - Modulus: `a % b`
  - **Unary Operators**: Operate on a single operand. Examples:
    - Unary Plus: `+a`
    - Unary Minus: `-a`
    - Increment: `++a` (pre-increment), `a++` (post-increment)
    - Decrement: `--a` (pre-decrement), `a--` (post-decrement)

- **Relational Operators**: Compare values. Examples:
  - Less than: `<`
  - Greater than: `>`
  - Less than or equal to: `<=`
  - Greater than or equal to: `>=`
  - Equal to: `==`
  - Not equal to: `!=`

- **Logical Operators**: Combine multiple boolean expressions. Examples:
  - Logical AND: `&&`
  - Logical OR: `||`
  - Logical NOT: `!`

- **Assignment Operators**: Assign values to variables. Examples:
  - Assignment: `=`
  - Add and assign: `+=`
  - Subtract and assign: `-=`
  - Multiply and assign: `*=`
  - Divide and assign: `/=`
  - Modulus and assign: `%=`


### 2. Data Types in Java

#### Primitive Data Types

| Data Type       | Size (Bytes) | Range                                                                 |
|-----------------|--------------|-----------------------------------------------------------------------|
| `byte`          | 1 byte       | -128 to 127                                                          |
| `short`         | 2 bytes      | -32,768 to 32,767                                                    |
| `char`          | 2 bytes      | 0 to 65,535                                                          |
| `boolean`       | 1 bit        | `true` or `false`                                                    |
| `int`           | 4 bytes      | -2^31 to 2^31 - 1 (`-2.147B to 2.147B`)                              |
| `long`          | 8 bytes      | -2^63 to 2^63 - 1 (`-9.223B to 9.223B`)                              |
| `float`         | 4 bytes      | Approximately ±3.40282347E+38F (6-7 significant decimal digits)      |
| `double`        | 8 bytes      | Approximately ±1.79769313486231570E+308 (15 significant decimal digits)|

### Non-Primitive Data Types

| Data Type       | Size (Bytes) | Range                                                                 |
|-----------------|--------------|-----------------------------------------------------------------------|
| `String`        | Varies       | Depends on the content                                               |
| `Array`         | Varies       | Depends on the type and size of the array                            |
| `Class`         | Varies       | Depends on the class structure                                       |
| `Object`        | Varies       | Depends on the class                                                 |
| `Interface`     | Varies       | Depends on the implementation                                        |

### Note

In Java, when declaring a float variable with a decimal value, you need to append the `f` suffix to the number:
The 'f' is required here because, by default, a decimal number is treated as a double. 

```java
float marks = 99.99f; 
```

---

## Checking Data Types in Java

In Java, you can check the data type of an object using various methods. Below are different approaches to achieve this:

## 1. Directly in Main Method

You can check the data type of a primitive or object by casting it to `Object` and then using `getClass().getSimpleName()`. 

```java
float flt = 23.0f;
System.out.println(((Object) flt).getClass().getSimpleName());
```

## 2. Using Wrapper Classes for Primitives

Wrapper classes in Java (e.g., `Integer`, `Double`) can be used to check the type of primitive data.

```java
Integer num = 10;
System.out.println(num.getClass().getSimpleName());
```

## 3. Creating a Custom Function

You can create a custom function to print the type of an object.

```java
public static void printType(Object obj) {
    if (obj == null) {
        System.out.println("The object is null.");
        return;
    }
    
    System.out.println(obj.getClass().getSimpleName());
}
```

**Note:** You cannot directly use `obj.getClass().getSimpleName()` in the `printType` method header or outside the method because Java's method signatures do not allow the direct embedding of statements or expressions in the declaration itself. You can only use expressions inside method bodies, not in method headers.

---





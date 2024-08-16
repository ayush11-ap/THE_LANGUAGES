# Java Programming Questions

## Direct Java Questions

1. **What will be the output of the following code?**
   ```java
   public class Test {
       public static void main(String[] args) {
           int num = 500;
           double result = num / 2.0;
           System.out.println(result);
       }
   }
   ```

2. **Given the following code, what will be the output, and why?**
   ```java
   public class Test {
       public static void main(String[] args) {
           double pi = 3.14159;
           int truncatedPi = (int) pi;
           System.out.println(truncatedPi);
       }
   }
   ```

3. **What will be the result of the following code?**
   ```java
   public class Test {
       public static void main(String[] args) {
           int a = 5;
           long b = 10L;
           float c = 15.0f;
           double result = a + b + c;
           System.out.println(result);
       }
   }
   ```

4. **Analyze the code below and state the output:**
   ```java
   public class Test {
       public static void main(String[] args) {
           byte x = 42;
           char y = 'a';
           int z = x + y;
           System.out.println(z);
       }
   }
   ```

5. **What will be the output of the following code?**
   ```java
   public class Test {
       public static void main(String[] args) {
           int a = 100;
           float b = 10.5f;
           int result = (int) (a / b);
           System.out.println(result);
       }
   }
   ```

6. **Consider the following code: What will be printed?**
   ```java
   public class Test {
       public static void main(String[] args) {
           long largeValue = 123456789123456789L;
           int smallerValue = (int) largeValue;
           System.out.println(smallerValue);
       }
   }
   ```

7. **Determine the output of the following code:**
   ```java
   public class Test {
       public static void main(String[] args) {
           float num = 1.5f;
           int roundedNum = (int) Math.round(num);
           System.out.println(roundedNum);
       }
   }
   ```

8. **What will the following code produce as output?**
   ```java
   public class Test {
       public static void main(String[] args) {
           double num = 9.99;
           int intValue = (int) num;
           System.out.println(intValue);
       }
   }
   ```

9. **What is the output of the following code?**
   ```java
   public class Test {
       public static void main(String[] args) {
           int num1 = 15;
           int num2 = 2;
           float result = num1 / num2;
           System.out.println(result);
       }
   }
   ```

10. **Given the following code, what will be the output?**
   ```java
   public class Test {
       public static void main(String[] args) {
           char letter = 'A';
           int asciiValue = letter + 5;
           System.out.println(asciiValue);
       }
   }
   ```

---

# Guess the Output

## 1. 
```java
public class Test {
    public static void main(String[] args) {
        int x = 2, y = 5;
        int exp1 = (x * y / x); 
        int exp2 = (x * (y / x)); 
        System.out.print(exp1 + " , ");
        System.out.print(exp2);
    }
}
```
*What is the output?*

---

## 2. 
```java
public class Test {
    public static void main(String[] args) {
        int x = 200, y = 50, z = 100;
        if(x > y && y > z){
            System.out.println("Hello");
        }
        if(z > y && z < x){
            System.out.println("Java");
        }
        if((y + 200) < x && (y + 150) < z){
            System.out.println("Hello Java");
        }
    }
}
```
*What is the output?*

---

## 3.
```java
public class Test {
    public static void main(String[] args) {
        int x, y, z;
        x = y = z = 2;
        x += y;
        y -= z;
        z /= (x + y);
        System.out.println(x + " " + y + " " + z);
    }
}
```
*What is the output?*

---

## 4.
```java
public class Test {
    public static void main(String[] args) {
        int x = 9, y = 12;
        int a = 2, b = 4, c = 6;
        int exp = 4 / 3 * (x + 34) + 9 * (a + b * c) + (3 + y * (2 + a)) / (a + b * y);
        System.out.println(exp);
    }
}
```
*What is the output?*

---

## 5.
```java
public class Test {
    public static void main(String[] args) {
        int x = 10, y = 5;
        int exp1 = (y * (x / y + x / y));
        int exp2 = (y * x / y + y * x / y);
        System.out.println(exp1);
        System.out.println(exp2);
    }
}
```
*What is the output?*

---
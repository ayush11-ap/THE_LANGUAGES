
---

# Java Programming Questions

### 1. Check if a Given Number is Prime

```java
import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int num = scnr.nextInt();
        boolean isPrime = true;

        if(num <= 1) {
            System.out.println("Enter a valid number");
            isPrime = false;
        } else {
            for(int i = 2; i <= Math.sqrt(num); i++) {
                if(num % i == 0) {
                    isPrime = false;
                    System.out.println("It is not a prime number");
                    break;
                }
            }
        }
        System.out.println(isPrime);
    }
}
```

### 2. Reverse a Number and Check if it is a Palindrome

```java
import java.util.Scanner;

public class PalindromeCheck {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int num = scnr.nextInt();
        int numCpy = num;
        int reversedNumber = 0;

        while(num > 0) {
            int LD = num % 10;
            reversedNumber = reversedNumber * 10 + LD;
            num /= 10;
        }

        if(reversedNumber == numCpy) {
            System.out.println("This is a palindrome");
        } else {
            System.out.println("This is not a palindrome");
        }
    }
}
```

### 3. Check if a Given Year is a Leap Year

```java
import java.util.Scanner;

public class LeapYearCheck {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int year = scnr.nextInt();

        if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}
```

### 4. Sum of First N Numbers (Two Methods)

**Method 1: Using a Loop**

```java
import java.util.Scanner;

public class SumOfN {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int n = scnr.nextInt();
        int sum = 0;

        for(int i = 1; i <= n; i++) {
            sum += i;
        }

        System.out.println("The sum of first " + n + " numbers is: " + sum);
    }
}
```

**Method 2: Using Formula**

```java
import java.util.Scanner;

public class SumOfNFormula {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int n = scnr.nextInt();

        System.out.println("The sum of first " + n + " numbers is: " + (n * (n + 1)) / 2);
    }
}
```

### 5. Convert Decimal to Binary

```java
import java.util.Scanner;

public class DecimalToBinary {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int Deci = 10;
        int Byrn = 0;
        int Power = 0;

        while (Deci > 0) {
            int rem = Deci % 2;
            Byrn = Byrn + rem * (int) Math.pow(10, Power);
            Deci /= 2;
            Power++;
        }

        System.out.print(Byrn);
    }
}
```

### 6. Convert Binary to Decimal

```java
import java.util.Scanner;

public class BinaryToDecimal {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int Deci = 0;
        int Byrn = 10000;
        int Power = 0;

        while (Byrn > 0) {
            int rem = Byrn % 2;
            Deci = Deci + rem * (int) Math.pow(2, Power);
            Byrn /= 10;
            Power++;
        }

        System.out.print(Deci);
    }
}
```
---

### 1. Check if a Number is Prime

**Question:**
Write a program to check if a number is prime or not.

**Solution:**
```java
public static boolean isPrime(int num) {
    if (num <= 1) {
        return false;
    }
    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
```

### 2. Find the Factorial of a Number

**Question:**
Write a program to find the factorial of a number.

**Solution:**
```java
public static int factorial(int num) {
    int fact = 1;
    if (num < 0) {
        throw new IllegalArgumentException("Number must be non-negative");
    }
    if (num <= 1) {
        return 1;
    }
    // Method 1: Recursive Approach
    // return num * factorial(num - 1);

    // Method 2: Iterative Approach
    for (int i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
```

### 3. Check if a Number is an Armstrong Number

**Question:**
Write a program to check if a number is an Armstrong number or not.

**Solution:**
```java
public static boolean isArmstrong(int num) {
    int numCopy = num; 
    int tempAms = 0;
    int pow = 0;

    // Method 1: Calculate the number of digits
    while (num > 0) {
        pow++;
        num /= 10;
    }

  // MEthod 2  System.out.println( String.valueOf(Math.abs(num)).length());

    // Reset num to original value
    num = numCopy;

    while (num > 0) {
        int ld = num % 10; 
        tempAms += Math.pow(ld, pow);
        num /= 10; 
    }

    return tempAms == numCopy;
}
```
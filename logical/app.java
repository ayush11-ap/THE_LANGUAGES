import java.util.*;

public class app {
     public static void main (String args[]){
    Scanner scnr = new Scanner(System.in) ;

// ? prime or not a given number 

// int num = scnr.nextInt();
// boolean isPrime = true ;
// if(num <= 1){
//      System.out.println("enter the valid number");
//      isPrime = false ;
// }
//  else{
//      for(int i = 2 ; i <= Math.sqrt(num) ; i++){

//           if( num % i ==0){
// isPrime = false ;
//      System.out.println("it is  not a prime number");
//  break ;
//           } 
//      }
//  } 
// System.out.println(isPrime);



  
// ?Print reverse of a number , and it is palindrome or not 

// int num = scnr.nextInt();
// int numCpy = num;
//  int reversedNumber = 0 ;

//  while(num > 0){
//      int LD = num%10  ;
//      reversedNumber = reversedNumber * 10 + LD ;
//      num /= 10 ;

//  }

//  if(reversedNumber == numCpy) {
//      System.out.println("this is palindrome ") ;
//  } else {
//      System.out.println("this is not a  palindrome ");

//  }


  


// ! Write a Java program that takes a year from the user and print whether that year is a leap year or not.

//  ! year % 4 == 0  -- T  && (// ! year % 100 != 0  -- //  || ! year % 400 ==0  -- f )


// int  year = scnr.nextInt() ;

// if(year%4 == 0 && ( year%  100!= 0 || year % 400 ==0)){
//     System.out.println("true");
// }else{
//     System.out.println("false");

// }




          
// ? sum of first  n numbers -2 methods

// int sum = 0 ;
// for loop std ;
// sum += i ; -- mthods 1 

//  ! better one 
// int  n = scnr.nextInt() ;
// System.out.println("the sum of n numbers is "   + (n*(n+1))/2);



// ! to binary  

// ! patterns 4 questions 


// ! To decimal to binary 

// int Deci = 10;
// int Byrn =0 ;
// int Power = 0  ;

// while (Deci  > 0){
//     int rem = Deci % 2 ;
//     // Byrn = Byrn + rem * (int) Math.pow(10,Power) ;
//     //  string += rem 
//     //  printing 
//     Deci /= 2 ;
//     Power++;
// }


// System.out.print(Byrn);

 

// ! to decimal 

// int Deci = 0;
// int Byrn =10000 ;
// int Power = 0  ;

// while (Byrn  > 0){
//     int rem = Byrn % 2 ;
//     Deci = Deci + rem * (int) Math.pow(2,Power) ; 
//     Byrn /= 10 ;
//     Power++;
// }


// System.out.print(Deci);










     }

     

}
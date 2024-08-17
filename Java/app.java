import java.util.*;

public class app {
     public static void main (String args[]){

// - Conditionals
// ?   If-else , else if , 
// ?  switch ,
//  ? tenary operator ,   
//  ? While Loop , for , do while  
// ?  break , continue
//  ? Nested Loops




// if(1>2){
// System.out.println("Hello this is true");
// } else if(3>2) {

// System.out.println("Hello this is false");
// }
// boolean isLogin = (4>3) ? true : false;

// System.out.println(isLogin);

// int num = 10 ;
// do{
// System.out.println("hello" + num );

// num-- ;
// } while(num >0) ;
// for(int  i = 1 ; i<=10 ; i++){
// System.out.println(  "+++++" +   i    );
// for( int  j = 1 ; j <=10 ; j++){

// System.out.println(  j  );
// };


// };


// {}

Scanner scnr = new Scanner(System.in) ;

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



// ? prime or not a given number - 2 methods  

// ?Print reverse of a number ---  and also save it into a variable 

int num = scnr.nextInt();
int numCpy = num;
 int reversedNumber = 0 ;

 while(num > 0){
     int LD = num%10  ;
     reversedNumber = reversedNumber * 10 + LD ;
     num /= 10 ;

 }

 if(reversedNumber == numCpy) {
     System.out.println("this is palindrome ") ;
 } else {
     System.out.println("this is not a  palindrome ");

 }


// ?  



// Write a Java program that takes a year from the user and print whether that
// year is a leap year or not.
// ? sum of n numbers -2 methods











     }

     

}
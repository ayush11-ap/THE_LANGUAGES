import java.util.*;
public class app {


// ! part -  methods 
//  Syntax with Parameters
//  Parameters vs Arguments



//  Function Overloading

//  Overloading using Parameters no of  paramters 
//  Overloading using Data Types

//  ! Theory 
//  Call by Value (in Java) ( it is done for variables )
//  What happens in memory (Call Stack)

//  Inbuilt vs User-defined Methods

//  Method Scope -- 
//  Block Scope  -{}


//  public static int printName( boolean a ){
//      // System.out.print("Nitesh");
//      return 10 ;
//   }



//    public static int Sum( int a , int b ,int c  ){
//      // System.out.print("Nitesh");
//      return  a+ b +c ;
//   }

public static  int Swap(int a , int b){

int temp = a ;
  a =b ;
  int z =20 ;
 b =  temp ; 

 return a  ;
}

     public static void main (String[] args){

int a = 10 ;
 int b = 20 ;

int res = Swap(a ,b);

System.out.print(z);



}

 





}

// ! function overolading 

// ! in  same class there are   multiple function with the same name but with different parameter  

// ? function overloading depends only on parameter like 
//   * 1. type of paramter
// * 2.  no of parameters onlly
//  * return type alone cannot distinguish overloaded methods in Java.

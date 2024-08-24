import java.util.*;

public class app {


     public static void main (String[] args){
    Scanner scnr = new Scanner(System.in) ;
// System.out.println(factorial(-3));



// if(isArmstrong(153)){
//      System.out.println("this is amstrong");
// } else{
//      System.out.println("this is not amstrong");

// }

     }





   
    public static boolean isArmstrong(int num ) {
        int numCopy = num; 
        int tempAms = 0;

int pow = 0 ;

// ! Method one to calulate the no of digit ;
     while (num > 0) {
            pow++;
            num /= 10;
        }

     //     System.out.println( String.valueOf(Math.abs(num)).length());

       num = numCopy;

        while (num > 0) {
            int ld = num % 10; 
            tempAms += Math.pow(ld, pow);
            num /= 10; 
        }

        return tempAms == numCopy;
    }

   





public static boolean isPrime(int num ){
if(num < 1){
     return false ;
}
for(int i = 2 ; i < Math.sqrt(num);i++){
     if(num %i ==0){
          return false ;
     }         
}
     return true ;
}

 
 public static int factorial( int num){

 int  fact = 1;
  if(num < 0){
      throw new IllegalArgumentException("Number must be non-negative");
  }
if(num <=1){
     return 1 ;
}
//   ! Method  -1
// return num * factorial(num -1);
//   ! Method  -2
for(int i = 1 ; i<=num ; i++){
     fact *= i;
}
return fact ;
 }

     

}
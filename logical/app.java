import java.util.*;


public class App {

  


    public static boolean PrimeCheck(int num) {

        if (num <= 1) {
            System.out.println("Enter a valid number");
            return false;
        }
        boolean isPrime = true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    public static void PrimesInRange(int number){

 for( int i = 2 ; i < number ; i++){
      boolean res = PrimeCheck(i);
      System.out.println( i + " , " + res);
 }

    }

    public static void main(String[] args) {
        int numberToCheck = 12; 
     //    boolean res = PrimeCheck(numberToCheck);

    //  PrimesInRange(10);
   
        
    }
}

import java.util.* ;

public class Java2 {

     public static void printType(Object obj) {        
        System.out.println(  obj.getClass().getSimpleName());
    }
    public static void main(String[] args) {




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//!  how to take input in java ;




String str = scnr.next();
String str = scnr.nextLine();

// int num = scnr.nextInt();
// int num2 = scnr.nextInt();

// float flt = scnr.nextFloat();
// byte byte2 = scnr.nextByte();
// float flt = scnr.nextFloat();


//  nextLong()
// docule   scnr.nextLong()
//  nextDouble()

// System.out.println(num);


// System.out.println(byte2);






// ! Type conversion / Widening / Implict conversion ;

//?  Conversion condtion:

// 1. Type compatible :

// long  a = 10 ;

// int b = a ;

// System.out.println(a); 
// System.out.println(b);


// 2.  Destination type > Source type ;






// long  a = 10 ;

// int b = a ;



//  int to float 
//  int to double

//  int to str 

//?  byte -> short -> int -> float -> long -> double




// * lossy conversion  ---

// ? implict converion  / float with nextInt();


// float  flt = scnr.nextInt();
// System.out.println(flt);


// ? Conversion of characters ;


// char a = '1';
// int cnv = a ;

// System.out.println(cnv);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ! Type Casting  // narrowing  conversion // explict converion ;
//   the type of conversion that java don't allow but , we forcefully want to convert that and this is called as type casting 
//  !Type Promotion in Expressions
// 1 . Java automatically promotes each byte, short, or char operand to int
// when evaluating an expression.
// 2. which data type is large in that expression , the whole expression is converted into the large data  type.
















    }
}




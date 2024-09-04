// public class App {
//     public static void invertedPyramid(int n) {
        
//         for (int i = 0; i <=n; i++) {
//             for (int j = n; j >= i; j--) {
//                 System.out.print("  ");
//             }
//             for (int j = 0; j < i; j++) {
//                 System.out.print("* ");
//             }
//             System.out.println();
    
//     }
//     }
//     public static void main(String[] args) throws Exception {

//         invertedPyramid(5);
// }}

public class app2 {
    public static void invertedPyramid(int n) {
        
        for (int i = 0; i <n; i++) {
           
            for (int j = 1; j <=n-i; j++) {
                System.out.print(j);
            }
            System.out.println();
    }}
    

    public static void InvertedHalfPyramid(int n){

        for(int i = 0 ; i <= n ;i++){
            for(int j = 0 ; j < n - i;j++){
                System.out.print(j +1);
            }
                System.out.println("");
        }
    }

    // O(N **2);

  public static void FloysTr(int n){
int num = 1;
        for(int i = 0 ; i <= n ;i++){
            for(int j = 0 ; j < i +1;j++){
                System.out.print(num +" ");
                num++;
            }
                System.out.println("");
        }
    }

// T O(n **2)
// S O(1)


  public static void BnyrTr(int n){

        for(int i = 0 ; i <= n ;i++){
            for(int j = 0 ; j < i +1;j++){
                    if((i +j)% 3 ==0){
                System.out.print(1);
                    }else {

                System.out.print(0);
                    }
                
            }
                System.out.println("");
        }
    }

 public static void SolidRhombus(int n){

        for(int i = 0 ; i <= n ;i++){

        for(int j = 0 ; j< n-i; j++){
                System.out.print(" ");
        }

        for(int j = 0 ; j < n;j++){
            System.out.print("*");
        }
                System.out.println("");
        }
    }


 public static void HollowRhombus(int n){

        for(int i = 0 ; i < n ;i++){

        for(int j = 0 ; j< n-i; j++){
                System.out.print(" ");
        }

        for(int j = 0 ; j < n;j++){

            if (i == 0 || j == 0 || j ==n-1 || i ==n-1){
                System.out.print("*");
            }else{
                System.out.print(" ");
            }
            
        }
                System.out.println("");
        }
    }


// O(n**2)



    public static void main(String[] args) throws Exception {

        // invertedPyramid(5);
        // InvertedHalfPyramid(5);
        // FloysTr(5);
            // BnyrTr(5);
        // SolidRhombus(5);
        // HollowRhombus(5);

}}
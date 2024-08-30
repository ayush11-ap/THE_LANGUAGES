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
    }
    }
    public static void main(String[] args) throws Exception {

        invertedPyramid(5);
}}
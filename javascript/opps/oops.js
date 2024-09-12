
// // ? Module 14 - Object-Oriented Programming (OOP) in JavaScript

// // * Programming Paradigms

// //  ? 1. Functional Programming (FP)
// //  ? 2. Object-Oriented Programming (OOP)
// //  ? 3. Procedural Programming (PP)
// //  ? 4. Structured Programming (SP)

// // ?  Additional Paradigms
// //  *1. Declarative Programming
// //  *2. Logic Programming
// //  *3. Event-Driven Programming
// //  *4. Concurrent Programming
// //  *5. Reactive Programming
// //  *6. Aspect-Oriented Programming (AOP)

// // +++++++++++++++++++++++++++++++++++++++++++++


// // JavaScript Specific

// // ? 1. Are there classes in JavaScript?
// // ? 2. What is the difference between Procedural Programming (PP) and Object-Oriented Programming (OOP)?
// // ? 3. What is OOP and why do we use it?


// // ----------------
// // * Object-Oriented Programming (OOP) Concepts
// // ----------------

// //* 1. Pillars of OOP:
// //*    - Abstraction
// //*    - Encapsulation
// //*    - Inheritance
// //*    - Polymorphism

// // ?  Parts of OOP: Language-Specific Features




// //?  1. Object Literals : - 

// // let user  = {
// //         name:"akshay",
// //         age:23 ,
// //         cars:{
// //                 name:"ff"
// //         } ,
// //         isLoggedIn :false ,
// //         isUserLoggedIn:function (){

// //                 console.log(this.isLoggedIn)
// //         }

// // }

// // // console.log(user['cars']['name'])
// // // console.log(user.cars.name)

// // user.adress = "tc"
// // user.name= "siddhant"
// // // console.log(user)

// // delete user.age 
// // // console.log(user)
// // user.isUserLoggedIn();



// //?     - `this` Keyword
// //?       - `this` with different contexts
//         //?    - in broswser , in node , in function , in arrow function , in event listenert , in methods ...


// // in global in browser  -- > window 
// //  in global in node -- > {}
// // in function --> in node --> gloabal node object
// //  in function --> in broswer --> window 

// //  in arrow function -- > rememeber , arrow function this always targets the  parent this 
// // in node --> {}
// //  in browser ---> window {}


// //? in methods 
// // we are getting the object it self 
// // if you are using arrow function  the value of this will be object i..e parent ka this 

// //  ?in event listener 
// // //  we know event listner dont work in  node 
// // // so the value of this will be the event element itself


// // //?  2. Constructor Functions:






// // //  imagine a Scenario  where u have a data of students 
// // //  the students has  name , rollono , bloodGroup , marks , 
// // //  and some methods as getMarks , update makrs 
 
// // function Students(aame  , rollono  , marks){   
// //         this.stdName = aame ;
// //         this.rollono = rollono ;
// //         this.marks = marks ;
// //         // console.log(this )
// //         // return this

// // }
// // function Students1(aame  , rollono  , marks){   
// //         this.stdName = aame ;
// //         this.rollono = rollono ;
// //         this.marks = marks ;
// //         // console.log(this )
// //         // return this

// // }



// //  let student1 = new Students("xyz" , 21 ,100);

// //  let student2 = new Students1("abc" , 23 ,10);
// //  let student3 = new Students("afsdfbc" , 34 ,100);


// // // console.log(student1)
// // // console.log(student2)
// // // console.log(student3)

// // // console.log(student3.constructor)
// // // console.log(student2.constructor)

// // //  parent name -- > cousturctor name 
// // //  student name --> instance 

// // //  instance instanceof Counstructor 
// // // student1 instanceof Students1

// // // console.log(student1 instanceof Students)




// //?     - Constructor Function & Instance
// //?     - Why Use `new` Keyword
// //?     - Definition of Constructor Function
// //?     - Instances (`new` Keyword) & `instanceof`
// //  Method, `instance.constructor`








// // ?   5. Prototypes & Prototype Inheritance
// // 

// function add(a,b){
//         console.log(a+b);
// }

// // add(3,4)

// // add.isLoggedIn = true ;

// // console.log(add.isLoggedIn)


// function Students1(aame  , rollono  , marks){   
//         this.stdName = aame ;
//         this.rollono = rollono ;
//         this.marks = marks ;
       
       
// return this
// }

// Students1.prototype.getMarks  = function (){
//         console.log(this.marks)
// }

// let s1 =  new Students1("xyz", 21, 100)
// let s2 = new Students1("abc", 26, 70)


// console.log(s1.getMarks())
// s1.getMarks()
// console.log(s1.getMarks)


// Array.prototype.indexLength = function (){
//         console.log(this.length -1)
// }

// let arr = [2,3,4,5,4,5,10]

// // arr.indexLength()

// console.log(arr[arr.indexLength()])


// String.prototype.trueLength = function (){
//         console.log(this.trim().length)
// }

// let strr = "            skldjfs                         "

// strr.trueLength();
// console.log(strr.length);

//  * Addon - Info for New Keyword
//   ? Topics:
//   - What happens when the `new` keyword is used:
//  *   - A new object is created.
//  *   - A prototype is linked.
//  *   - The constructor is called.
//  *   - The new object is returned.
// 
//  ? JavaScript Default Behavior:
//   - Prototypical behavior.
//   - Everything is an object.
// 
//  ? Ways to Add Methods to a Constructor Function:
//   - this.methodName.
//   - functionName.prototype.methodName.

//  ?  Inheritance: && bibble of js  page no 17 
//   - Older Way: student.__proto__ = teacher.
//   - Modern Way: Object.setPrototypeOf(student, teacher).





// var human = {
//         name:"harsh",
//         canFly:true,
//         canTalk:true,
//         willDie:true
// }

// var sherryStudent = {
//         solveQuestion:true ,
//         createmodernweb : true
// }

// sherryStudent.__proto__ = human

// console.log(sherryStudent.canFly)

// let Person = {
   
//         canFly : true,
//         hasEyes : true
// }

// function Teacher( name, id, canTeach , getSalary){
//    this.name = name;
//    this.id = id;
//    this.canTeach = canTeach;
//    this.getSalary = getSalary;
// }

// function Students(name , id , canLearn , payFees){
//  this.name = name;
//  this.id = id;
//  this.canLearn = canLearn;
//  this.payFees = payFees;

// }

// Teacher.__proto__ = Person ;
// Students.__proto__ = Person ;

// let teacher1 = new Teacher("tushar" , "1234tushar",true , true)
// let student1 = new Students("siddhant" , "1234siddhant",true , true)


// console.log(teacher1)
// console.log(student1.canFly)



// function Person() {}

// Person.prototype.canFly = true;
// Person.prototype.hasEyes = true;

// function Teacher(name, id, canTeach, getSalary) {
//     Person.call(this);
//     this.name = name;
//     this.id = id;
//     this.canTeach = canTeach;
//     this.getSalary = getSalary;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// function Students(name, id, canLearn, payFees) {
//     Person.call(this);
//     this.name = name;
//     this.id = id;
//     this.canLearn = canLearn;
//     this.payFees = payFees;
// }

// Students.prototype = Object.create(Person.prototype);
// Students.prototype.constructor = Students;

// let teacher1 = new Teacher("tushar", "1234tushar", true, true);
// let student1 = new Students("siddhant", "1234siddhant", true, true);

// console.log(teacher1);
// console.log(student1.canFly);



const teacher  ={
        canTeach:true ,
     }
    
     const student  ={
        canLearn: true,
         
     }
    
//       older way 
//      student.__proto__ = teacher 
//  modern way 
Object.setPrototypeOf(student, teacher)

     console.log(student.canTeach)

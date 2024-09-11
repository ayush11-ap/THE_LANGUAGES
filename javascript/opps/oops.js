
// ? Module 14 - Object-Oriented Programming (OOP) in JavaScript

// * Programming Paradigms

//  ? 1. Functional Programming (FP)
//  ? 2. Object-Oriented Programming (OOP)
//  ? 3. Procedural Programming (PP)
//  ? 4. Structured Programming (SP)

// ?  Additional Paradigms
//  *1. Declarative Programming
//  *2. Logic Programming
//  *3. Event-Driven Programming
//  *4. Concurrent Programming
//  *5. Reactive Programming
//  *6. Aspect-Oriented Programming (AOP)

// +++++++++++++++++++++++++++++++++++++++++++++


// JavaScript Specific

// ? 1. Are there classes in JavaScript?
// ? 2. What is the difference between Procedural Programming (PP) and Object-Oriented Programming (OOP)?
// ? 3. What is OOP and why do we use it?


// ----------------
// * Object-Oriented Programming (OOP) Concepts
// ----------------

//* 1. Pillars of OOP:
//*    - Abstraction
//*    - Encapsulation
//*    - Inheritance
//*    - Polymorphism

// ?  Parts of OOP: Language-Specific Features




//?  1. Object Literals : - 

// let user  = {
//         name:"akshay",
//         age:23 ,
//         cars:{
//                 name:"ff"
//         } ,
//         isLoggedIn :false ,
//         isUserLoggedIn:function (){

//                 console.log(this.isLoggedIn)
//         }

// }

// // console.log(user['cars']['name'])
// // console.log(user.cars.name)

// user.adress = "tc"
// user.name= "siddhant"
// // console.log(user)

// delete user.age 
// // console.log(user)
// user.isUserLoggedIn();



//?     - `this` Keyword
//?       - `this` with different contexts
        //?    - in broswser , in node , in function , in arrow function , in event listenert , in methods ...


// in global in browser  -- > window 
//  in global in node -- > {}
// in function --> in node --> gloabal node object
//  in function --> in broswer --> window 

//  in arrow function -- > rememeber , arrow function this always targets the  parent this 
// in node --> {}
//  in browser ---> window {}


//? in methods 
// we are getting the object it self 
// if you are using arrow function  the value of this will be object i..e parent ka this 

//  ?in event listener 
//  we know event listner dont work in  node 
// so the value of this will be the event element itself


//?  2. Constructor Functions:






//  imagine a Scenario  where u have a data of students 
//  the students has  name , rollono , bloodGroup , marks , 
//  and some methods as getMarks , update makrs 
 
function Students(aame  , rollono  , marks){   
        this.stdName = aame ;
        this.rollono = rollono ;
        this.marks = marks ;
        // console.log(this )
        // return this

}
function Students1(aame  , rollono  , marks){   
        this.stdName = aame ;
        this.rollono = rollono ;
        this.marks = marks ;
        // console.log(this )
        // return this

}



 let student1 = new Students("xyz" , 21 ,100);

 let student2 = new Students1("abc" , 23 ,10);
 let student3 = new Students("afsdfbc" , 34 ,100);


// console.log(student1)
// console.log(student2)
// console.log(student3)

// console.log(student3.constructor)
// console.log(student2.constructor)

//  parent name -- > cousturctor name 
//  student name --> instance 

//  instance instanceof Counstructor 
// student1 instanceof Students1

console.log(student1 instanceof Students)




//?     - Constructor Function & Instance
//?     - Why Use `new` Keyword
//?     - Definition of Constructor Function
//?     - Instances (`new` Keyword) & `instanceof`
//  Method, `instance.constructor`







//  ! 5. Prototypes & Prototype Inheritance



//  js  ka  default behaviour hy , prototypical behaviour  , layer par yupar jati hy parent , grant parent   , ko acess karti hy jab tak null na mile .

//  function ka demo dena hai like .  obejct jaise 

// function function vhi hy , object vhi hy 
// function technically  reference object ko vhi karta hai 

//  2 tarike ke  se method ko add kar skate constructor function me 
// 1. this.methodname 
// 2 . funcitonname.prototype.methodname 
// with new  keyword ke sat aur without new keyword ke saat

//  prototype aur detail me 
//  String.protoype .   , obejxt .rptorottype , 
// inhertiance 
// older way --   student.__proto__ = teacher
// Modern way -- Object.setPrototypeOf(student , teacher)
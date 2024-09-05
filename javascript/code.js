
 

const person = {
    name: "John Doe",
    age: 30,
    isMarried: true,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  // Accessing properties
  console.log(person.name); // Output: John Doe
  console.log(person.age);  // Output: 30
  
  // Calling a method
  person.greet(); // Output: Hello, my name is John Doe
  


//  ! constructor function 

// har bar ye naya instance deta hai  ,
// ye  implicitly return ho jata hy this,
//  agar new keyword  se call kiya to , agar nahi to  undefined  

//  new keyword is used to  create new context , 
//   when ever the new keyword    is called an empty object is created ,called as instance 
//  1. new object is creator
// 2 . 

function User(username , loginCount , isLoggesIn){
    this.username = username ;
    this.loginCount = loginCount ;
    this.isLoggesIn = isLoggesIn ;

    this.greeting = function(){
        console.log(`namaste ${this.username}`)
    }
   
    return this  ;
   
   }
    
    // let userOne  = User("nitesh" , 12 , true)
    // let userTwo  = User("kushwaha" , 17 , false) 
    
    
   
    
   let userOne  =  new User("nitesh" , 12 , true)
//    console.log(userOne)
// userOne.greeting()
let userTwo  =  new User("kushwaha" , 17 , false) 
//    console.log(userTwo)
   
   
   console.log(userOne.constructor)
   // constructor ,reference hota  hai kud ke hii barem me
   // console.log(userTwo)
   
   
   //  instance of  js --  
   // console.log(userOne instanceof User)  //t 
   // console.log(userOne instanceof Object) //t 
   // console.log(userTwo instanceof User )  //t 
   
   
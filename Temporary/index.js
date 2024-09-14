// ! call, apply, bind

// function setUsername(username){
//     this.username = username;
// }

// function userDetails(username, id, password){
//     // setUsername.call(this, username);
//     setUsername.apply(this, [username]);

//     this.id = id;
//     this.password = password;
// }

// const user1 = new userDetails("Ayush", 22218, 42);
// console.log(user1);

// ! classes 
// class User{
//     constructor(username, age, dob){
//         this.username = username;
//         this.age = age;
//         this.dob = dob;
//         this.getUsername = () => {
//             console.log(this.username);
//         }
//     }

// }

// let user1 = new User('ayush', 18, 11);
// let user2 = new User('kewal', 20, 01);
// console.log(user1, user2);


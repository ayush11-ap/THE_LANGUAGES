
// ### **Module 12 - Asynchronous & API Handling:**

// 1. setInterval & setTimeout ✔️
// 2. clearInterval & clearTimeout ✔️


// 3. Main Stack & Side Stack & event loop

// 4. Creating Promises
// 5. Then, Catch, Finally, Async, Await
// 6. Promise.all
// 7. Promise.race
//  8 . Promse.any 


// ?  set Interval 

//  let time = setInterval(()=>{
//     console.log(100)
// } , 1000)

// // clearInterval(time)




// let pros = new Promise((res ,rej)=>{

// setInterval(()=>{
//     // res("hrlo")
//     rej("your  passo is wroung ")

// }, 2000)

// })

//  pros
//  .then((data)=>console.log(data))
//  .catch((error)=>console.log(error))
//  .finally(()=>console.log("always"))


// async function Async2(){

// try {
    
//     let res = await  pros;
// console.log(res)
// } catch (error) {
//     console.log(error)
// }

// } 

// Async2();


// 6. Promise.all ( AND -- if every  promise is resolve , then only the )
// 7. Promise.race
//  8 . Promse.any 


// let p1 = new Promise((res,rej) => setTimeout(()=> rej("this is promise 1 "),100))
// let p2 = new Promise((resolve,rej) => setTimeout(() => rej('Promise 2 resolved'), 100));
// let p3 = new Promise((resolve ,rej) => setTimeout(() => rej('Promise 3 resolved'), 20));

// A * B -- 

// Promise.all([p1 ,p2 ,p3])
// .then((data)=>{

//     console.log(data)

// })
// .catch(()=>{})



//  Promise.race 

// Promise.race([p1 ,p2 ,p3])
// .then((data)=>{

//     console.log(data)

// })
// .catch((er)=>{})

    //  8 . Promise.any 


//     Promise.any([p1 ,p2 ,p3])
// .then((data)=>{

//     console.log(data)

// })
// .catch((er)=>{console.log(er.errors)})

// let promise1 = new Promise((resolve ,rej ) => setTimeout(() => rej('Promise 1 resolved'), 1000));
// let promise2 = new Promise((resolve,rej) => setTimeout(() => rej('Promise 2 resolved'), 500));
// let promise3 = new Promise((resolve ,rej) => setTimeout(() => resolve('Promise 3 resolved'), 500));

// Promise.any([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value); // "Promise 2 resolved" (whichever resolves first)
//   })
//   .catch((error) => {
//     console.log(error); // Only if all promises are rejected
//   });




 let url ="http://universities.hipolabs.com/search?name="

 let country = "India"

 fetch(url + country)
 .then((data) => data.json())
 .then((res) => {
   console.log(res);
 })
 .catch((error) => {
   console.error('Error:', error);
 });

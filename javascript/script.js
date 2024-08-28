 let inp = document.querySelector('input')
 let url = "https://www.google.com/search?q=";

 let data  = [];





document.querySelector('button').addEventListener("click" , ()=>{
 let Country = inp.value 
 getUniv(Country);
 inp.value = '';
})




 async function getUniv(Country){

  try{
let res = await fetch(url +Country);
data  = await res.json() ;
console.log(data);
createList(data);

  } catch (err) {
 console.log( "error is " + err)
  }
 }
 
 function createList(data) {
  // Clear the previous list before adding new items
  document.querySelector('ol').innerHTML = '';

  if (data.length === 0) {
    loading();
    return;
  }

  function loading() {
    document.querySelector('ol').innerHTML = "Loading";
  }

  data.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = element.name;
    document.querySelector('ol').appendChild(li);
  });
}

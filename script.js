


function isPrime(num){
  

 if( num < 1){
    return false
 }

 for(let i = 2 ; i <=num ; i++){
    if(num % 2 == 0){

        return false ;

    }

 }

 return true ;
}

 let res = isPrime(12);
 console.log(res);


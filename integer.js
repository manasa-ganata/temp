// var isInteger = function (value) {
    // if (typeof value !== 'number') {
    //   return false;
    // }
  
  //   if ((value | 0) !== value) {
  //     return false;
  //   }
  
  //   return true;
  // };

  // console.log(isInteger(6))



  //prime number
  // var number=5;
  // isprime=true;
  // if(number<=1){
  //   console.log("not a prime")
  // }else if(number>1){
  //   for(let i=2; i<number; i++){
  //     if(number%i==0){
  //       isprime=false;
  //       break;
  //     }
  //   }
  //   if(isprime){
  //     console.log(`${number} number is prime`)
  //   }
  //   else{
  //     console.log(`${number} number is not prime`)
  //   }
  // }
  // else{
  //   console.log("number is not prime")
  // }



//function with prime number
//   function myPrime(num){
// if(num<=1){
//   return false     
// }
// for(i=2; i<num; i++){
// if(num%i===0){
//   return false
// }

// }
// return true;

//   }
  
// console.log(  myPrime(12))


//oddnumber

function myodd(nu1){
  if(nu1%2==0){
    return false
  }
  else{
    return true
  }
}
console.log(myodd(6))

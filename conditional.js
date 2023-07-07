var age=80;

// if(age>30){
//     console.log(age)
// }else{
//     console.log('err')
// }


(age>40) ? console.log("yes"):console.log('no')

//for loop
let arr=[4,5,6,7,8]
// we have to define indexes and include length of the array and need specify increment
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

//for in looop
// no need to specify indexes by default it will take indexes before in statement and after instatment you will get array
for (let q in newarr){
    console.log(newarr[q])
}

//no need to specify indexes directly we can extract the value
for (let values of arr){
    console.log(values)
}

const string='hello world'

// const resverse=string.split('').reverse().join('')
// console.log(resverse)


const array9=string.split(" ")
console.log(array9)
let value="";
for (let p of array9){
value +=" "+p.split('').reverse().join('')
}
console.log(value)
const newarr=[4,6,7,7,7,4]


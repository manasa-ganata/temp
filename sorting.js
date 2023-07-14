//const arr1=["A","B","C",'c',"u"];
const arr=[1,2,4,5,6,7]
const value=arr.sort((a,b)=>(a<b)? -1:1)
console.log(value)
console.log(value[0])//minimum=1
console.log(value[arr.length-1])
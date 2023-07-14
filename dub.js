// const arr=[1,2,3,4,4,3,3,2,2,5,6,7,5,6,7,8,9,0,5,6,3,6,7]
// console.log(arr.indexOf(6))

// const output=arr.filter((iteam,index,arr)=>{
//     return iteam>=7
// })
// console.log(output)

// const removedup=arr.filter((iteam,index,arr)=>{
//     return arr.indexOf(iteam)===index
// })
// console.log(removedup);


//findout duplicate count using foreach or map and filter
 
//  const arr1=[1,2,3,4,3,3,5,6,5,4,5,3]
//  const duplic=(dup)=>{
//     const output1=arr1.filter((iteam,index,arr)=>{
//         return dup.indexOf(iteam) !== index;
//      }).length;
//      return output1
//  }
//  const output1=duplic(arr1);
//  console.log(output1);




const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) 
{ counts[x] = (counts[x] || 0) + 1; });
console.log(counts)



const result=sampleArray.reduce((intial,current)=>{
intial[current]=(intial[current] || 0 )+1
console.log(intial[current])
return intial;
},{})
console.log(result)
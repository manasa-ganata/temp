const mapfil=[1,2,3,4,5,6,7]
const filtermap=mapfil.map((iteam,index)=>{
    console.log(iteam,index);
    return iteam+2
})
console.log(filtermap);
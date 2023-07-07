// const num=4
// let n1=0,n2=1,nextterm;

// for(let i=1;i>=1;i++){
//     console.log(n1)
//     nextterm=n1+n2;
//     n1=n2;
//     n2=nextterm;
// }

var num=8;
let n1 = 0, n2 = 1, nextTerm;
nextTerm = n1 + n2;

while (nextTerm <= num) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
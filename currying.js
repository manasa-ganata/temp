function sum1 (a,b,c){
    return a*b*c;
}
console.log(sum1(6,7,8))

function sum(a){
    return function (b){
        return function(c){
            return(a+b+c);
        }
    }

}
console.log(sum(6,7,8))
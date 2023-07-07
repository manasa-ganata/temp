function person(fristname,lastname,age){
    this.fristname=fristname;
    this.lastname=lastname;
    this.age=age;
}

var method=function(){
    console.log(`${this.fristname} and ${this.lastname} and  age is ${this.age} ` )

}
 var p1=new person("manasa","ghanta",23);
 console.log(p1)
 var p2=new person("sowmya", "ghanta", 23);
 method.call(p2);


// let name= {
//     fname:"manasa",
//     age:23,
// } 
// var printfull = function(){
//     console.log(this.fname+ " age is "+this.age);
// }
// printfull.call(name);

// let name2={
//     fname:"sowmya",
//     age:25,
// }
// printfull.call(name2);
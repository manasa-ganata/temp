var name=(function(x){
    return x;
})(6)
    
console.log(name)


//constructor
function person(name,age,address){
    this.name=name;
    this.age=age;
    this.address;
    this.mydetails=()=>{
        return `${this.name} and the age is  ${this.age} and the address is ${this.address}`
    }
}
var p1=new person("manasa",23,"gudivada")
console.log(p1.mydetails())

const team=[
    {name:"manasa", age:23},
    {name:"bill",age:43},
    {name:"kim",age:12},
]
function isadult(member){
    return member.age<18;
}
console.log(team.find(isadult));
    
    
    
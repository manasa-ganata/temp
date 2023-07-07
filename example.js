//closures
// a function inside anthor function that inner fuction can call the outer function but we cant call the inner functon to other  function is called closures
function myClass(){
    const name = "person";
    function myHuman(){
        console.log(name);
    }
    myHuman()
}
myClass()
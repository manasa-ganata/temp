function great(name,callback){
    console.log('hello'+' '+name)
    callback()
}
function callme(){
    console.log('this is a callbackfunction')
}
great('manasa',callme)


//settimeout
function call(){
    console.log('hello world')
}
function sayname(name){
    console.log('hi'+' '+name)
}
setTimeout(call,2000);
sayname('john')
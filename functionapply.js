let languages = {
    language:"js",
    rating:4
}

var print=function(name,id){
    console.log(this.language+" and ratting is " +this.rating+" " + name+" "+id)
}

print.apply(languages,["manasa",225])

let languages2 ={
    language:"python",
    rating:4
}
print.call(languages2,"someone",123)



//bind

let languages3={
    language:".net",
    rating:2
}

let printlang=print.bind(languages3,"anyone",233)
printlang();
//console.log(printlang);
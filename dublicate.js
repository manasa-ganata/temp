//input is duplicate([1, 2, 3, 4, 5]) make output like this [1,2,3,4,5,1,2,3,4,5]
// function duplicate(arr){
//     const arr1=[1,2,3,4,5]
//     const arr2=[1,2,3,4,5]
//     return arr=arr1.concat(arr2)
// }
// console.log(duplicate())



// var addSix = createBase(6);
// addSix(10);
// addSix(21);
// //if you pass this arguments you need to get the results 
// addSix(10);//output:16
// addSix(21);//output:27


// function addSix(num){
//     const a=6
//     const b=num
//     return result=a+b
// }
// console.log(addSix(21))


// // Create a for loop that iterates up to 10 while outputting "fizz" at multiples of 3, 
// // "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.


function addnu(num){
    if(num%3==0){
        if((num%3==0)&&(num%5==0)){
            console.log("fizzbuzz")
        }else{
            console.log("fizz")
        }
        
    }else if(num%5==0){

        console.log("buzz")
    }else{
        console.log("invalid")
    }
    // }else(num%3||num%5)
    //     console.log("fizzbuzz")
}
addnu(8)

// Given two strings, return true if they are anagrams of one another

// anagrams means string 1 letters should be available in string2 both should match

// function checkStringsAnagram(a, b) {
//    let len1 = a.length;
//    let len2 = b.length;
//    if(len1 !== len2){
//       console.log('Invalid Input');
//       return
//    }
//    let str1 = a.split('').sort().join('');
//    let str2 = b.split('').sort().join('');
//    if(str1 === str2){
//       console.log("True");
//    } else { 
//       console.log("False");
//    }
// }
// checkStringsAnagram("indian","ndiani")

// write same like this one more example


// function check(a,b){
//     let len1=a.length;
//     let len2=b.length;
//     if(len1 !==len2){
//         console.log("Invalid")
//         return
//     }
//     let str1=a.split("").sort().join('');
//     let str2=b.split('').sort().join('');
//     if(str1==str2){
//         console.log("true")
//     }else{
//         console.log("false");
//     }
//     }

// check("india","india")
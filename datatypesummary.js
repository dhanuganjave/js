//premitive datatype
//7 types: string,number,boolean,null,undefined,symbol,BigInt,

const score =100
const scorevalue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bignumber=12234567n
console.log(bignumber)



//refrence(non premetive)
//array,objects,functions

const heros=["shaktiman ","nagraj","sachin"]
let myObj={
    name:"dhanu",
    age:23
}
console.log(typeof(myObj))
const myfunction=function(){
    console.log("hello world")
}
console.log(typeof outsideTemp)
console.log(typeof anotherId)
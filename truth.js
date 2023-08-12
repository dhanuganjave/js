const useremail="dhananjay@yahoo.com"
if(useremail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}
if(useremail.length===0){
    console.log("array is empty")
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}




////nullish coalescing operator(??):null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1= undefined ?? 15
//console.log(val1)

val1=null ?? 10 ?? 31
console.log(val1)

//ternary operator
//condition ? true :false

const iceteaprice=100
iceteaprice>=80 ? console.log("less than 80"): console.log("more than 80")
//const tinderuser=new Object()

const tinderuser={}
tinderuser.id="12345"
tinderuser.name="samu"
tinderuser.isloggedin=false
const regularuser={
    email:"dhananjayganjave @gmail.com",
    fullname:{
        userfullname:{
            firstname:"dhananjay",
            lastname:"ganjave"
        }
    }

}


//console.log(regularuser.fullname.userfullname)
//console.log(tinderuser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

//console.log(obj3)
 const user=[{

    id:1,
    emailid:"yahoo@com"
 },
]

//instructor
user[0].emailid 
//console.log(tinderuser);
//console.log(Object.keys(tinderuser))



const course ={
    coursename:"js in english",
    price:"999",
    courseinstructor:"dhananjay"
}
const {courseinstructor:instructor}=course
console.log(instructor)


{
    "name":"dhananjay",
    "coursename":"js in hindi",
    "price":"free"

}
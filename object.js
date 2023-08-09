const mysym=Symbol("key1")

const jsuser={
    name:"dhananjay",
    [mysym]:"mykey1",
    age:23,
    location:"mumbai",
    email:"dhananjay@google.com",
    isLoggedIn:false,
    lastloginDays:["sunday","saturday"]
}
/*console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["lastloginDays"])
//console.log(typeOf(jsuser.mysym))
console.log(jsuser[mysym])*/

jsuser.email="dhananjay@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email="dhananajy@microsoft.com"
//console.log(jsuser)


jsuser.greeting=function()
{
    console.log("hello js user")

}
console.log(jsuser.greeting)
jsuser.greetingone=function()
{
    console.log(`hello js user,${this.name}`)
    console.log(jsuser.greetingone)
}

const user={
    username:"dhananjay",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        //console.log(this)
    }
}
//user.welcomemessage()

//user.username="ram"
//user.welcomemessage()
//
function cofee(){
    let username="dhananjay"
   // console.log(this.username)

}
//cofee()





const chai= () =>{
    let username="dhananjay"
    //console.log(this)
}
//chai()



//const addtwo=(num1,num2)=>{
   // return num1+num2

//console.log(addtwo(78,45))


//const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=>({username:"dhananjay"})


console.log(addtwo(4.6))

const myarray=[2,4,5,6]
 myarray.forEach()
 

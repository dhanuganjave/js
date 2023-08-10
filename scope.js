let a=400
//const b=20
//var c=30

if(true){
    let a=10
    const b=20
    var c=30
//console.log("inner:",a)
}
for(let i=0;i<Array.length;i++)
{

}
//console.log(a)
//console.log(b)
//console.log(c)


function one()
{
    const username="dhananjay"
    function two(){
        const website="twitter"
        //console.log(username)
    }
    //console.log(website)
    two()
}
one()


if(true){
    const username="dhananjay"
    if(username==="dhananjay"){
        const website="yahoooo"
        //console.log(username + website)

    }
    //console.log(website)
}
//console.log(username)



/////////////////////////////////////////////
function addone(num){
    return num+1
}
console.log(addone(3))

const addtwo=function(num)
{
    return num+2
}
console.log(addtwo(5))
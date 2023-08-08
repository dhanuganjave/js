let myDate=new Date()
 /* console.log(myDate.toString())
  console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)*/



let mycreateDate=new Date("08-9-1998")
console.log(mycreateDate.toLocaleString());

let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(mycreateDate.getTime)
console.log(Math.floor(Date.now()/1000))
console.log(mycreateDate.getMonth()+1)
console.log(mycreateDate.getFullYear())
console.log(mycreateDate.getTimezoneOffset()) 

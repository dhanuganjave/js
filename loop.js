//for
/*for (let index = 0; index <=10; index++) {
    const element = index
    console.log(element)
}*/

for(let i=0;i<=5;i++)
{
    const elem=i;
    if(elem==3){
        //console.log("3 is a best number")
    }
   // console.log(elem)
}


for (let i = 1; i <=50; i++) {
    //console.log(`outer loop value:${i}`)
    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop value:${j} and inner loop ${i}`)
        //console.log(i+ '*'+j + '=' + i*j)
    
    
//console.log(i+ '*' +j + '=' +i*j)
}
}

let myarray=["flash","batman","superman"]
//console.log(myarray.length)

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
   // console.log(element)
    
}

//break and continue
/*for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`)
        break;
    }
    console.log(`value of index is:${index}`)*/
    
for (let index = 0; index <=20; index++) {
    if(index==5){
       // console.log(`detected 5`)
        continue;
    }
    //console.log(`value of index is:${index}`)
    
    
}

let i=0
while (i<=6) {
//console.log(`value of index is ${i}`)
 i=i+2 
    
}


let array=['superman','ramnath','ganesh']
let arr=0
while(arr<=array.length){
    //console.log(`value is ${array[arr]}`)
    arr++
}

let score=0

do {
    console.log(`score is ${score}`)
    score++;

}while (score<=10)
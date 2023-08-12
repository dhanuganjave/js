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
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of index is:${index}`)
    
    
}


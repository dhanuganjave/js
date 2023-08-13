const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:'swift by apple'
}

for(const key in myObject){
   // console.log(myObject[key])
   // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programing=["js","cpp","py","java","rb"]
for(const key in programing)
{//console.log(programing[key])

}
const  map =new Map()
map.set('IN',"INDIA")
map.set('usa',"united state of america")
map.set('fr',"france")
map.set('china',"china")
for(const key in map)
{
//console.log(key)
}

const coding=["js","cpp","py","java","rb"]

//coding.forEach(function (item) {
    //console.log(item);
//})

coding.forEach(  (item)  =>{
    //console.log(item)

})

function printme(item){
    //console.log(item)

}
coding.forEach(printme)

coding.forEach(  (item,index,arr)=>{
   // console.log(item,index,arr)
})

const myCoding =[
    {
        langname:"javascript",
        langfilename:"js"
    },
    {
        langname:"java",
        langfilename:"java"
    },
    {
        langname:"paython",
        langfilename:"py"
    },
    {
        langname:"html",
        langfilename:"ht"
    },
    {

    }




]
myCoding.forEach( (item)  => {
    console.log(item.langname)
} )
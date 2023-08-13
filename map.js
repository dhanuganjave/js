const coding =["js","java","py","rb"]


    const val=coding.forEach((item)=>{
    //console.log(item)
    return item
}
)
//console.log(val)

const myNUM=[1,2,3,4,5,6,7,8,9,10]
 //const newnum= myNUM.filter(  (num)   =>{ 
   //    return num>4
 //})
const newnum1=[]
myNUM.forEach((num)  =>{
    if (num>4){
        newnum1.push(num)
    }
})
 //console.log(newnum1)


const book=[
    {title:'bookone',genere:'fiction',publish:1981,edition:2004},

    
    {title:'book2',genere:'non-fiction',publish:1990,edition:2005},

    
    {title:'book3',genere:'history',publish:1995,edition:2006},
    {title:'book3',genere:'history',publish:1998,edition:2007},

    
    {title:'book4',genere:'geography',publish:2000,edition:2010},

    
    {title:'bookone',genere:'economi',publish:2002,edition:2022},
]
//const userbooks=book.filter((bk)=>bk.genere==='history')

const userbooks=book.filter((bk)=>{ 
    return bk.publish>=1995 && bk.genere==='history'

})
//console.log(userbooks);



const myNUM1=[1,2,3,4,4,5,6,7,7,8]
 const newnums=myNUM1.map((num)=>{return num+10})
// console.log(newnums)

 const arr=[1,2,3,,44,,5,5,6,777]
 const map=arr.map(( num)=>{ return num+100})
 //console.log(map)

const newnum2=arr.map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=300)
                    //console.log(newnum2)



                    ///////reduce



                    const mynums=[1,2,3,4]
                // const mytotal=mynums.reduce(function(acc,currentvalue){
                       // console.log(`acc:${acc} and cuurentvalue:${currentvalue}`)
                        //return acc+currentvalue
                   // },0)
                    //console.log(mytotal)



                    //const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
                   // console.log(mytotal)


                    const shoppingcard=[
                    {
                        itemname:"jscource",
                        price:2999
                    },
                    {
                        itemname:"pyothoncource",
                        price:3000
                    },
                    {
                        itemname:"datascience",
                        price:5000
                    },
                    {
                        itemname:"testing",
                        price:25000
                    },
                ]
                const pricetopay=shoppingcard.reduce(( acc,item)=>acc+item.price,0)
                    console.log(pricetopay)

                    
                    
                    
                    
                    

                     
 







//for of 

const arr=[1,2,3,4,5,6]
for (const num of arr) {
   // console.log(num)
    
}

const greetings="hello world !"
for(const greet of greetings){
    //console.log(`each char is ${greet}`)
}




//map

const  map =new Map()
map.set('IN',"INDIA")
map.set('usa',"united state of america")
map.set('fr',"france")
map.set('china',"china")
//console.log(map);

for(const [key, value] of map){
    console.log(key,':-',value);
}
const myObject={
    'game1':'nfs',
    'game2':'spiderman'}

    for(const[key,value] of myObject){
        console.log(key,':-',value);

    }
// maps
const map=new Map();
map.set('IN',"India")
map.set('USA',"united state of america")
map.set('FR',"France")
console.log(map);
  
    //for of loop
// for (const Key of map) 
// {
//     console.log(Key)
// }
for (const[Key,value] of map)
{
    console.log(Key,':-',value)
}
//foor in loop
const myobj={
   cpp:"c++",
   js:"javascript",
   rb:"ruby"
   
}
//myobj is not iterable using forof loop
// for (const[Key,value] of myobj)
//     {
//         console.log(Key,':-',value)
//     }
      
     for (const key in myobj) 
        {
         console.log(`${key} shortcut for ${myobj[key]}`)
        }
        
        //forEach loop
        const coding=["js","ruby","python","java"];
        coding.forEach(function(item)
    {
        console.log(item);
    })
    const code=[
    {
        lang:"javascript",
        filename:"js"
    },
    {
        lang:"java",
        filename:"java"
    },
    {
        lang:"python",
        filename:"py"
    },
]
code.forEach((item)=>
{
    console.log(item.lang);
})
    
 
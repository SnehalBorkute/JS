//PROMISES

new Promise(function(resolved,reject)
{
    setTimeout(function()
{
  console.log("Async task completed");
 resolved()
},2000)
})
.then(function()
{
    console.log("promise consumed");
})

const promiseOne=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        resolve({name:"chai",emmail:"chai@example.com"})
    },1000)
})
promiseOne.then(function(item)
{
    console.log(item);
})


const promiseThree=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let Error =false;//or true- call reject
        if(!Error)
        {
            resolve({userName:"ABC",password:"1423"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
 })
    promiseThree.then((user)=>
    {
        console.log(user);
    })
    promiseThree.catch((e)=>
    {
        console.log(e);
    })
    promiseThree.finally(()=>
    
        console.log("promise is resolved or reject")
)


const promiseFour=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let Error =true;//or true- call reject
        if(!Error)
        {
            resolve({userName:"ABC",password:"1423"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
 })
 
 //USE async await 
 async function consumePromiseFour() {
    try{
    const response=await promiseFour
    console.log(response);
    }
    catch (e){
        console.log(e);
    }
}
 
 consumePromiseFour();

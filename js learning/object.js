const jsuser={
    name: "snehal",
    age:21,
    email:"abcgmail.com"
}
console.log(jsuser.age)
console.log(jsuser["name"])
const regularname={
    Fullname:{
      Userfullname:{
        FirstName:"snehal",
        lastName:"Borkute"
      }
    }
}
console.log(regularname.Fullname)
//combine two objects
const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)
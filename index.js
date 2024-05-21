const app= require('./first')
console.log(app)
console.log(app.z())
const arr=[2,4,6,8,10,12]
let a=arr.filter((item)=>{
     console.log(item)
     return item>=6
})
console.log(a)
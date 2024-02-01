//asynchronous example
// let pizza
// function orderPizza() {
//     console.log("Order pizza")
//     setTimeout(()=>{
//         pizza ="P"
//         console.log(`${pizza} is ready`)
//     })
//     console.log("Pizza was ordered")
// }
// orderPizza()
// console.log("Call Abhi")
// console.log(`Eat ${pizza}`)

// function orderPizza(callback) {
//     setTimeout(()=>{
//         const pizza ="P"
//         callback(pizza)
//     },2000)
// }
// function pizzaReady(pizza){
//     console.log(`Eat ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log("Call Abhi")

//sync function blocks the next line of code where as async does not

//Promise-pending.resolve,reject
// function getWeather(){
//     return new Promise(function(resolve,reject){
//         resolve('Sunny')
//         reject('rainy')
//     })
// }

// const promise=getWeather()
// console.log(promise)
// promise.then(function(data){
//     console.log(`First param ${data}`)
// },
// function(data){
//     console.log(`Second param ${data}`)
// }
// )

// function getWeather(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve('Sunny')
//             // reject('Sunny')
//         },100)
//     })
// }

// function getWeatherIcon(weather){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             switch(weather){
//                 case "Sunny":
//                     resolve('S')
//                     break
//                 case "Cloudy":
//                     resolve('C')
//                     break
//                 case "Rainy":
//                     resolve('R')
//                     break
//                 default:
//                     reject("NO ICON FOUND")
//             }
//         },100)
//     })
// }


// function onSuccess(data){
//     console.log(Success ${data})
// }
// function onError(error){
//     console.log(Error ${error})
// }
// // getWeather()
// // .then(getWeatherIcon)
// // .then(onSuccess,onError)

// //alternatively to handle errors we can use the catch block
// getWeather()
// .then(getWeatherIcon)
// .then(onSuccess)
// .catch(onError)


// function fun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("404")
//         },100)
//     })
// }

// function fun2(){
//     console.log("Function 2")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("S")
//         },100)
//     })
// }

// function onSuccess(data){
//     console.log(Success: ${data})
// }

// function onError(error){
//     console.log(Error: ${error})
// }

// function onFinally(){
//     console.log("Done")
// }

// //If any of the functions fail it directly jumps to the error function
// fun1()
// .then(fun2,onError)//if we catch the error using .then the flow continues and will log undefined for anything preceeding 
// //if we just use .catch then the other functions do not get triggered
// .then(onSuccess)
// .catch(onError)
// .finally(onFinally)


//realworld example
// function fetchData(){
//     return new Promise(function(resolve,reject){
//         fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//         .then(response=>response.json())
//         // .then(data=>resolve(data.properties.periods[1].shortForecast))
//         .then(data=>reject(data.properties.periods[1].shortForecast))
//     })
// }

// //testing 
// function onError(weather){
//     console.log(Error: ${weather})
// }

// function displayData(weather){
//     console.log(weather)
// }
// fetchData()
// .then(displayData)
// .catch(onError)

//async await
// function getData(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(46)
//         },1)
//     })
// }

// async function start2(){
//     getData()
//     .then(result=>{
//         console.log(result)
//     })
// }
// start2()

// async function start(){
//     const result=await getData()
//     console.log(result)
// }
// start()

// async function start(){
//     const data=await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     const result=await data.json()
//     console.log(result.properties.periods[0].shortForecast)
// }
// start()

// async function start1(){
//     fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     .then(data=>data.json())
//     .then(result=>{
//         console.log(result.properties.periods[0].shortForecast)
//     })
    
// }
// start1()


//Points to note
// Async await must be used together
// exceptions: JS modules,chrome dev tools console
// async/await only affects Promise receiver
// You can await any function that returns a promise
// Any function can be converted to async
// Async functions returns a Promise
// error handling with try/catch


// function getData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             // resolve("Something went right")
//             reject("Something went wrong")
//         },1)
//     })
// }
// function onSuccess(){
// // Take advantage of success block
// }
// function onError(){
// // Take advantage of failure block
// }

// async function start(){
//     try{
//     const result=await getData()
//     // onSuccess()
//     console.log(result)
// }catch (error){
//     // onError()
//     console.log(Error ${error})
// }
// }
// start()

// // async function start1(){
// //     const result=await getData()
// //     .catch(error=>{
// //         console.log(Error ${error})
// //     })
// //     console.log(result)
// // }
// // start1()

// Fetch

// const url = "http://worldtimeapi.org/api/timezone/America/New_York"

// async function getData(){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
 
// getData()

//spotify api
// const url = "http://api.spotify.com/v1/artist/0k17h0D3J5VfsdmQ1iZtE9"

// async function getData(){
//     const request = new Request(url,{
//         headers:{
//             'Authorization':''//generate token to access
//         }
//     })
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
 
// getData()


// const url = "http://api.spotify.com/v1/artist/0k17h0D3J5VfsdmQ1iZtE9"
// const url = "http://random.v"

// const request = new Request(url,{
//     headers:{
//         'Authorization':'Bearer 123'//generate token to access
//     }
// })
// fetch(url)
// .then(response=>response.json())
// .then(data=>console.log("Success",data))
// .catch(error=>console.log(error))

//API
// const url = "http://api.spotify.com/v1/artist/0k17h0D3J5VfsdmQ1iZtE9"
// const request = new Request(url,{
//     headers:{
//         'Authorization':''//generate token to access
//     }
// })
// async function getData(){
//     try{
//     const response = await fetch(url)
//     const data = await response.json()
//     if (response.status===200)
//     {
//     console.log("Success ",data)
//     }
//     else{
//         console.log("Server Error ",data.error.message)
//     }
// }catch(error){
//     console.log("Fetch Error",error)
// }
// }
 
// getData()


// //post req
// fetch('https://reqres.in/api/users',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'User 1'
//     })
// }).then(res=>{
//     return res.json()
// })
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))
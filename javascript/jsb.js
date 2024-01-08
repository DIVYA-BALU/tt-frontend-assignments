const but =document.getElementById("button")
const colortext = document.getElementById("color")
const warp =document.getElementById("warp")
const a=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

but.addEventListener('click',function(){

let b='#'
for(let i=1;i<=6;i++){
   b += ab()
}

warp.style.backgroundColor =b
colortext.innerHTML = hexColor

})


function ab(){
    let v=Math.floor(Math.random()*16)
    return a[v]
}
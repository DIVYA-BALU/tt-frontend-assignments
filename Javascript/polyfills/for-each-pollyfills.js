const numberArray = [1,2,3,4,5];

Array.prototype.forEach = null

if(!Array.prototype.forEach)
{
  Array.prototype.forEach = function(getnum){
    for(let num of this)
      getnum(num);
  }
}
numberArray.forEach(num => {
  console.log(num);
})
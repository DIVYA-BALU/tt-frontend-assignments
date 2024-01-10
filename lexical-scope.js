const obj1={
  fun1:function(){  
    const fun2=function(){
      console.log(this);
    }
    fun2();
  }
  // fun2();
}
obj1.fun1();
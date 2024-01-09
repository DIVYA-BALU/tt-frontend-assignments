function outerFun() {
    const name = "Nathis";
    function innerFun() {
      console.log(name);
    }
    return innerFun();
}

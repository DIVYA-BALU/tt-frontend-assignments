let name = "Hari";
function callName() {
    console.log("Hello " + name);
}


function outerScope() {
    let hero = "SpiderMan";
    function innerScope() {
        console.log(hero, " is an American");
    }
    innerScope();
}

callName();
outerScope();
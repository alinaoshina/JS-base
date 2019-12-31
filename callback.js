const func1 = function(f) {
    console.log("1");
    f();
    
}

const func2 = function() {
    console.log("2")
}

console.log(func1(func2));
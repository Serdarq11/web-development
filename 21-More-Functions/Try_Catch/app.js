try{
    hello.toUpperCase();
} catch{
    console.log("ERRORR!!!");
}

console.log("AFTER");

let yell = function(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time!");
    }
    
}
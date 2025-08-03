const args = process.argv.slice(2);

for(let arg of args){
    console.log(`Hello there, ${arg}`);
}

// if we type node greeter.js rusty colt        -> it will return Hello there, rusty
// Hello there, colt


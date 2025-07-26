// function sum(){
//     return arguments.reduce((total, el) => total += el, 0);
// }

function sum(...nums) {          // it is called Rest
    return nums.reduce((total, el) => total += el, 0);
}

console.log(sum(1, 2, 3, 4));   // 10

function raceResults(gold, silver, ...everyoneElse) {
    console.log("GOLD GOES TO:", gold);
    console.log("SILVER GOES TO:", silver);
    console.log("AND THANKS TO EVERYONE ELSE:", ...everyoneElse);
}

raceResults("serdar", "gozde", "emre", "sahin", "sirin");   // GOLD GOES TO: serdar SILVER GOES TO: gozde AND THANKS TO EVERYONE ELSE: emre sahin sirin
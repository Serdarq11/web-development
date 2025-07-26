let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...nums);   // 1 2 3 4 5 6 7 8 9 10            -> spread operator

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

console.log(allPets);   // [ 'Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt' ]

const makingArray = [..."hello"];

console.log(makingArray);   // [ 'h', 'e', 'l', 'l', 'o' ]


// SPREAD IN OBJECT LITERALS

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {...feline, ...canine};

console.log(catDog);    // { legs: 4, family: 'Caninae', isFurry: true }

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

// I want to ad an id to the object above
const newUser = {...dataFromForm, id: 2345, isAdmin: false};
console.log(newUser);
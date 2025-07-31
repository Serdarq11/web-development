// fetch("https://swapi.tech/api/people/1/")
//     .then(res => {
//         console.log("Resolved", res);
//         return res.json(); // gives our data of Skywalker object
//     })
//     .then((data) => {
//         console.log("JSON DONE!", data);
//         return fetch("https://swapi.tech/api/people/2/");
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED");
//         return res.json();
//     })
//     .then((data) => {
//         console.log("JSON DONE!", data);
//     })
//     .catch(e => {
//         console.log("ERROR!!", e);
//     })



// The async function shorten the above

const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.tech/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.tech/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
    } 
    catch (e) {
        console.log("ERRORRR!!!!")
    }
}

loadStarWarsPeople();
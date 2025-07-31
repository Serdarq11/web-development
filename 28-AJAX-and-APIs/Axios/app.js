// axios.get("https://swapi.tech/api/people/1/").then((res) => {   // // it will return a promise as well.
//     console.log("RESPONSE:", res);
// })
// .catch(e => {
//     console.log("ERRORRR!!!",e);
// })


// async function version of this is:

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log("ERRORR!", e);
    }
}

getStarWarsPerson(3);   // R2-D2
getStarWarsPerson(5);   // Leia Organa


// setting headers with axios


const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
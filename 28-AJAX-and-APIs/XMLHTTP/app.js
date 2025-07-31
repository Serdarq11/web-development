const req = new XMLHttpRequest();
 
req.onload = function () {
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);       // turning it to JS Object
  // console.log(data.result.properties);
  console.log(data.result.properties.name, data.result.properties.height);
};
 
req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
};
 
req.open("GET", "https://swapi.tech/api/people/1/");
req.send();
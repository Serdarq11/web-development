const button = document.querySelector('button');
const h1 = document.querySelector('h1');

function changeBackground(){
    const rValue = Math.floor(Math.random() * 255) + 1;
    const gValue = Math.floor(Math.random() * 255) + 1;
    const bValue = Math.floor(Math.random() * 255) + 1;

    const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
    document.body.style.backgroundColor = rgbColor;
    h1.innerText = rgbColor;
}

button.addEventListener('click', changeBackground);



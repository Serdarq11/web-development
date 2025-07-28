document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log("KEYDOWN");
    console.log(e.key);
    console.log(e.code);
})


// input.addEventListener('keyup', function (e) {
//     console.log("KEYUP");
// })



// This is used in games
window.addEventListener('keydown', function (e){
    console.log(e.code);
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNIRED!");
    }
})
const fs = require('fs');
const folderName = process.argv[2] || 'Project';


// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {      // asynchronous version
//   console.log("IN THE CALLBACK!");
//     if (err) throw err;
// });

// fs.mkdir('Cats');

// fs.mkdirSync(folderName);
// console.log("I COME AFTER MKDIR IN THE FILE!!");

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
}
catch (e) {
    console.log("SOMETHING WENT WRONG!");
    console.log(e);
}
// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com', (response) => {
//     console.log("IT WORKED!!!");
//     console.log(response);
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log("IT WORKED AGAIN!!");
//         console.log(response);
//         fakeRequestCallback('books.com/page3', (response) => {
//             console.log("IT WORKED AGAIN!! (3rd request)");
//             console.log(response);
//         }, (err) => {
//             console.log("ERROR!! (3rd request)");
//             console.log(err);
//         })
//     }, (err) => {
//         console.log("ERROR!! (2ND request)");
//         console.log(err);
//     })
// }, (err) => {
//     console.log("ERROR!!!", err);
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')   // this wil give me an object
//     .then(() => {
//         console.log("IT WORKED!!! (page1)");
//         fakeRequestPromise('yelp.com/api/coffee/page1')
//             .then(() => {
//                 console.log("IT WORKED!!!(page2)");
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!(page3)");

//                     }).catch(() => {
//                         console.log("OH NO, ERROR!!(page3)");
//                     })

//             }).catch(() => {
//                 console.log("OH NO, ERROR!!(page2)");
//             })
//     }).catch(() => {
//         console.log("OH NO, ERROR!! (page1)");
//     })


// flattened and shorter version

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!! (page1)");
        console.log(data);      // here is your fake data from yelp.com/api/coffee/page1
        return fakeRequestPromise('yelp.com/api/coffee/page1');
    })
    .then((data) => {
        console.log("IT WORKED!!! (page2)");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page1');
    })
    .then((data) => {
        console.log("IT WORKED!!! (page3)");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page1');
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!");
        console.log(err);
    })
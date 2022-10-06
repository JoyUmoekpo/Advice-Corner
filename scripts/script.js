fetch('https://api.adviceslip.com/advice')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('An error occurred: ', error)
});

// fetch('https://api.adviceslip.com/advice/36')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log('An error occurred: ', error)
// });

// fetch('https://api.adviceslip.com/advice/search/high')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log('An error occurred: ', error)
// });
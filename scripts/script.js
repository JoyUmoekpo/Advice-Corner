fetch('https://api.adviceslip.com/advice')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('An error occurred: ', error)
});
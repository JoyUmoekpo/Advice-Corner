fetch('https://api.adviceslip.com/advice')
.then(response => {
    return response.json();
})
.then(post => {
    console.log(response)
});
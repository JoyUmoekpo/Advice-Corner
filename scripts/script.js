fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#advice')
        .innerHTML =`<h6>Here's your advice: <br> ${data.slip.advice}</h6>`
    })
    .catch(() => console.log('An error occurred. Please fix your code.'));


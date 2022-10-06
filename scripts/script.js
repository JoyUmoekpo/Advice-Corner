fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {

        document.querySelector('#greeting')
        .innerHTML =`Hello! Here's your advice:`;

        document.querySelector('#advice')
        .innerHTML =`${data.slip.advice}`;

    })
    .catch(() => console.log('An error occurred. Please fix your code.'));


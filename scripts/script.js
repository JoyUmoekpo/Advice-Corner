fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => console.log(data.slip.id, data.slip.advice))
    .catch(() => console.log('An error occurred. Please fix your code.'));


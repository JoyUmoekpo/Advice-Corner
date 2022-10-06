fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => console.log('An error occurred. Please fix your code.'));


async function getAdvice(){
    let url = 'https://api.adviceslip.com/advice';
    try {
        let response = await fetch(url);
        return await response.json();
    } catch((error) => {
        console.log('An error occurred: ', error);
    }
}

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

// let advice = document.querySelector('.advice');
// advice.innerHTML = advice;
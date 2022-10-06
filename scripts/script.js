request = (user_input) => {
    let url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => {
        document.querySelector("#advice").textContent = data.json();
    })
    .catch((error) => document.querySelector("#advice").textContent = error);
}





// async function getAdvice() {
//     let url = "https://api.adviceslip.com/advice";
//     try {
//         let response = await fetch(url);
//         return response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAdvice()
//     .then(data => console.log(data));

// fetch('https://api.adviceslip.com/advice')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
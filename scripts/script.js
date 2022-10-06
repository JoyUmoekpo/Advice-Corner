async function getAdvice(){
    let url = "https://api.adviceslip.com/advice";
    try {
        let response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

getAdvice()
.then(json => console.log(json));
async function getAdvice(){
    let url = 'https://api.adviceslip.com/advice';
    try {
        let response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

async function readAdvice(){
    let advice = await getAdvice();
    let html = '';
    advice.forEach(adv => {
        let htmlSegment = `<div class="advice">
                            <h1 class="advice-id">${adv.slip_id}</h1>
                            <h2 class="advice-message">${adv.advice}</h2>
                        </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

readAdvice();
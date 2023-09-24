

const getRandomAdvice = async () => {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const response = advice.json();
    return response;
}

getRandomAdvice()
    .then(advice => console.log(advice))
    .catch(error => console.log(error));
const adviceText = document.querySelector(".advice__text");
const adviceGenegartorBtn = document.querySelector(".generate__btn");
const adviceId = document.querySelector(".adviceId")

const getRandomAdvice = async () => {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const response = advice.json();
    return response;
}

adviceGenegartorBtn.addEventListener("click", () => {
    getRandomAdvice()
    .then(response => {
        adviceId.textContent = response.slip.id
        adviceText.textContent = response.slip.advice
    }
    ).catch(err => console.log(err));
});



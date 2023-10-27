const btn = document.getElementById("generate-btn");

const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    console.log(data)
    document.getElementById('advice-id').innerHTML = data.slip.id
    document.getElementById('advice-text').innerHTML = data.slip.advice
}

btn.addEventListener('click', fetchAdvice) 
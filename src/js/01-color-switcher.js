function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timer = null;
startButton.addEventListener("click", ()=>{
    startButton.disabled = true;
    timer = setInterval(()=>{
       let color = getRandomHexColor();
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
})
stopButton.addEventListener("click", ()=>{
    startButton.disabled = false;
    clearInterval(timer);
})


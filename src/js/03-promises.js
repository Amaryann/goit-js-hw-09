import Notiflix from "notiflix";
const form = document.querySelector(".form");
const delay = form.querySelector("input[name='delay']");
const step = form.querySelector("input[name='step']");
const number = form.querySelector("input[name='amount']")
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
     }
     else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
  }, delay)})
  return promise
  }
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  for (let i = 0; i < number.value; i++){
    let delayValue = Number(delay.value)+(Number(step.value)*i)
    createPromise(i+1, delayValue).then(value => {
      Notiflix.Notify.success(value);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    });
  }
})
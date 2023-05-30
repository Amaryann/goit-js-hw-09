// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
  const addLeadingZero = (object) => {
    if (object < 10){
      return object.toString().padStart(object.toString().length+1, "0");
    }
    return object
  } 
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
  }
  const dataTimePicker = document.getElementById("datetime-picker");
  const hours = document.querySelector("span[data-hours]");
  const days = document.querySelector("span[data-days]");
  const minutes = document.querySelector("span[data-minutes]");
  const seconds = document.querySelector("span[data-seconds]");
  const startButton = document.querySelector("button[data-start]");
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const today = new Date();
      const ms = selectedDates[0]- today;
      if (ms<0){
        Notiflix.Notify.warning("Please choose a date in the future");
        startButton.disabled = true;
        return;
      }
      startButton.disabled = false;
      let timer = null;
      startButton.addEventListener("click", ()=>{
        timer = setInterval(()=>{
          let now = new Date();
          let ms = selectedDates[0] - now;
          if (ms > 0){
            let dataObject = convertMs(ms);
            hours.textContent = dataObject["hours"];
            days.textContent = dataObject["days"];
            seconds.textContent = dataObject["seconds"];
            minutes.textContent = dataObject["minutes"];
          }
          else{
            clearInterval(timer);
          }
          
        }, 1000)
      })

    },
  };
  flatpickr(dataTimePicker, options);


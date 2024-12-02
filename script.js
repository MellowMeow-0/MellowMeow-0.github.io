// add class when at the top of page
let navbody = document.querySelector(".topnavbar")

// set the variable every time page is loaded
window.addEventListener('load', () => {
    navbody = document.querySelector(".topnavbar")
})

// scroll event
window.addEventListener("scroll", () => {
    
    // when scroll Y is lower than 2. add the class
    if (window.scrollY > 2) {
        navbody.classList.add("navbody-top");
    } else {
        navbody.classList.remove("navbody-top")
    }

})

// get the coundown value elements by their id
const days_value = document.getElementById('days')
const hours_value = document.getElementById('hours')
const minutes_value = document.getElementById('minutes')
const seconds_value = document.getElementById('seconds')
const countdown_date_time = new Date("January 21 2025 09:15:00").getTime()

// coundown logic
function countdown() {
    if (days_value) {
    const date_time_now = new Date().getTime();
    let difference = countdown_date_time - date_time_now;

    // days
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
     // hours
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
     // minutes
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    // seconds
    const seconds = Math.floor(difference / 1000) % 60;

    // set the element value
    days_value.innerHTML = days;
    hours_value.innerHTML = hours;
    minutes_value.innerHTML = minutes;
    seconds_value.innerHTML = seconds;

    // if difference at 0 then keep time set to 00
    if (difference < 0) {
        days_value.innerHTML = '00';
        hours_value.innerHTML = '00';
        minutes_value.innerHTML = '00';
        seconds_value.innerHTML = '00';

    }
    }
}

// run function every second
setInterval(countdown, 1000);
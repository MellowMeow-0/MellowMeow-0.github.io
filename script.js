// add class when at the top of page
let navbody = document.querySelector(".topnavbar")

// set the variable every time page is loaded
window.addEventListener('load', () => {
    navbody = document.querySelector(".topnavbar")
})

// scroll event
window.addEventListener("scroll", () => {
    
    // when scroll Y is lower than 2. add the class
    if (navbody) {
        if (window.scrollY > 2) {
            navbody.classList.add("navbody-top");
        } else {
            navbody.classList.remove("navbody-top")
        }
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



// Find Greatest Common Divisor
function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

// random number in range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

const operations = ['-', '+', '*','/'];    

function generate_frac() {
    // set random values
    const random_op = Math.floor(Math.random() * operations.length);
    const num_1 = randomNumber(1,10);
    const num_2 = randomNumber(1,10);
    const den_1 = randomNumber(1,10);
    const den_2 = randomNumber(1,10);
    const frontcard = document.getElementById('question');
    const backcard = document.getElementById('answer');
    // change HTML to random fractions
    const question = `$$\\frac{${num_1}}{${den_1}} ${operations[random_op]} \\frac{${num_2}}{${den_2}}$$`;
    frontcard.innerHTML = question;
    // answer variables
    let top_1;
    let top_2;
    let num_result;
    let den_result;
    let gcd_value;
    let answer;
    
    // show the answer
    switch (random_op) {
        default: 
            console.log("default operation");
            backcard.innerHTML = "Default Answer";
            break;
        // Subtract Operator
        case 0:
            top_1 = num_1 * den_2;
            top_2 = den_1 * num_2;
            num_result = top_1 - top_2;
            den_result = den_1 * den_2;
            gcd_value = gcd_rec(num_result,den_result);

            answer = `$$\\frac{${num_result}}{${den_result}}=
            \\frac{${num_result/gcd_value}}{${den_result/gcd_value}}=
            ${ Math.round((num_result/den_result) * 100) / 100 }$$`;

            backcard.innerHTML = answer;
            break;
        // Add Operator
        case 1:
            top_1 = num_1 * den_2;
            top_2 = den_1 * num_2;
            num_result = top_1 + top_2;
            den_result = den_1 * den_2;
            gcd_value = gcd_rec(num_result,den_result);

            answer = `$$\\frac{${num_result}}{${den_result}}=
            \\frac{${num_result/gcd_value}}{${den_result/gcd_value}}=
            ${ Math.round((num_result/den_result) * 100) / 100 }$$`;

            backcard.innerHTML = answer;

            break;

        // Multiply Operator
        case 2:
            // set the answer values
            num_result = num_1 * num_2;
            den_result = den_1 * den_2;
            gcd_value = gcd_rec(num_result,den_result)

            answer = `$$\\frac{${num_result}}{${den_result}}=
            \\frac{${num_result/gcd_value}}{${den_result/gcd_value}}=
            ${ Math.round((num_result/den_result) * 100) / 100 }$$`;

            backcard.innerHTML = answer;
            break;
        // Divide Operator
        case 3:
            // flipped the multiplication variables 
            num_result = num_1 * den_2;
            den_result = den_1 * num_2;
            gcd_value = gcd_rec(num_result,den_result)

            answer = `$$\\frac{${num_result}}{${den_result}}=
            \\frac{${num_result/gcd_value}}{${den_result/gcd_value}}=
            ${ Math.round((num_result/den_result) * 100) / 100 }$$`;

            backcard.innerHTML = answer;
            break;

    }
    // Update Latex Math
    MathJax.typeset()
}


// flip card function
function flip_card() {
    const card = document.getElementById('container');
    const class_check = card.classList.contains('clicked');
    
    // Add class if the element does not have the clicked class
    if (!class_check) {
        card.classList.add("clicked");
    } else {
        card.classList.remove("clicked");
    }
}


function open_section() {
    console.log('section opened')
    const card = document.getElementById('Section');
    const c_check = card.classList.contains('sec-open');
    
    // Add class if the element does not have the clicked class
    if (!card.classList.contains('sec-open')) {
        card.classList.add("sec-open");
        
    } else {
        card.classList.remove("sec-open");
    }
}

// Dropdown button functionality

 function DropTimer() {
    const dropBtn = document.getElementById("dorpDownButton");
    const counter = document.getElementById("countdown-container")
    const drop_check = counter.classList.contains('dropped')

    if (!drop_check) {
        counter.classList.add("dropped");
        dropBtn.innerHTML = '↑';
    } else {
        counter.classList.remove("dropped");
        dropBtn.innerHTML = '↓';
    }
 };
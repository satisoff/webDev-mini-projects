const allImages = document.querySelectorAll("header img");
const allSound = document.querySelectorAll("main audio");
const soundIcon = document.querySelector(".sound-img");
const screenTap = document.querySelector(".screenTap");

const clockTime = document.querySelector(".clock-img");
const clockTimeText = document.querySelector(".curTime");
const clockTimeSection = document.querySelector(".time-sec");
const clockTic = document.querySelector(".clockTick");

const stopwatchTime = document.querySelector(".stopwatch-img");
const stopwatchTimeText = document.querySelector(".stopwatchTime");
const stopwatchStart = document.querySelector(".stopwatch-start");
const stopwatchStop = document.querySelector(".stopwatch-stop");
const stopwatchReset = document.querySelector("#stopwatch-reset");
const stopwatchSection = document.querySelector(".stopwatch-sec");
const stopwatchSound = document.querySelector(".stopwatchSound");

const timerTime = document.querySelector(".timer-img");
const timerTimeText = document.querySelector(".timerTime");
const timerHourSelection = document.querySelector(".hour-opt");
const timerMinSelection = document.querySelector(".min-opt");
const timerSecSelection = document.querySelector(".sec-opt");
const timerStartBtn = document.querySelector(".start-timer");
const timerSection = document.querySelector(".timer-sec");
const allTimerOptions = document.querySelectorAll(".choose-time select");
const timerSound = document.querySelector(".timerSound");
const timerEnd = document.querySelector(".timerEnd");

//Setting Up hovering animation for every Image
allImages.forEach(images => {
    images.addEventListener("mouseenter", () => {
        images.style.animation = "moveSliderIn 0.3s ease-in 1 forwards";
    })
    if (!images.classList.contains('active-image-icon')) {
        images.addEventListener("mouseleave", () => {
            images.style.animation = "moveSliderOut 0.3s ease-out 1 forwards";
        })
    }
})

//Setting Up Clock
function setCurTime() {
    const curDate = new Date();
    const formattedHour = String(curDate.getHours()).padStart(2, '0');
    const formattedMin = String(curDate.getMinutes()).padStart(2, '0');
    const formattedSeconds = String(curDate.getSeconds()).padStart(2, '0');
    const curTime = `${formattedHour}:${formattedMin}:${formattedSeconds}`;
    clockTimeText.innerText = curTime;
}

clockTime.addEventListener("click", () => {
    screenTap.play();
    clockTime.classList.add("active-image-icon");
    stopwatchTime.classList.remove("active-image-icon");
    timerTime.classList.remove("active-image-icon");
    clockTimeSection.style.display = "flex";
    stopwatchSection.style.display = "none";
    timerSection.style.display = "none";
    setInterval(setCurTime, 1000);
})
window.addEventListener('load', () => {
    setInterval(setCurTime, 1000);
})


//Setting up Timer
timerTime.addEventListener("click", () => {
    screenTap.play();
    clockTime.classList.remove("active-image-icon");
    stopwatchTime.classList.remove("active-image-icon");
    timerTime.classList.add("active-image-icon");
    clockTimeSection.style.display = "none";
    stopwatchSection.style.display = "none";
    timerSection.style.display = "flex";
})

//Load all possible options
for (let vals=1; vals<=24; vals++) {
    let newOpt = document.createElement('option');
    newOpt.innerText = `${vals}hr`;
    newOpt.value = vals;
    timerHourSelection.add(newOpt);
}
for (let vals=1; vals<=59; vals++) {
    let newOpt = document.createElement('option');
    newOpt.innerText = `${vals}min`;
    newOpt.value = vals;
    timerMinSelection.add(newOpt);
}
for (let vals=1; vals<=59; vals++) {
    let newOpt = document.createElement('option');
    newOpt.innerText = `${vals}s`;
    newOpt.value = vals;
    timerSecSelection.add(newOpt);
}

//Update the Inner Text
function updateTimerText() {
    let timerHour = String(timerHourSelection.selectedIndex).padStart(2,'0');
    let timerMin = String(timerMinSelection.selectedIndex).padStart(2, '0');
    let timerSec = String(timerSecSelection.selectedIndex).padStart(2, '0');
    timerTimeText.innerText = `${timerHour}:${timerMin}:${timerSec}`;
}

allTimerOptions.forEach(select => {
    select.addEventListener("change", updateTimerText);
})

let countdownInterval;
function startTimer() {
    let timerHour = timerHourSelection.selectedIndex;
    let timerMin = timerMinSelection.selectedIndex;
    let timerSec = timerSecSelection.selectedIndex;
    
    function countdown() {
        if (!timerSec) {
            if (!timerMin) {
                if (!timerHour) {
                    timerEnd.play();
                    clearInterval(countdownInterval);
                    return;
                } else {
                    timerHour--;
                    timerMin+=59;
                    timerSec+=59;
                }
            } else {
                timerMin--;
                timerSec+=59;
            }
        } else {
            timerSec--;
        }
        let updTimerHour = String(timerHour).padStart(2,'0');
        let updTimerMin = String(timerMin).padStart(2, '0');
        let updTimerSec = String(timerSec).padStart(2, '0');
        timerTimeText.innerText = `${updTimerHour}:${updTimerMin}:${updTimerSec}`;
        timerSound.play();
    }
    countdownInterval = setInterval(countdown, 1000);
}

timerStartBtn.addEventListener('click', () => {
    startTimer();
    timerHourSelection.value = 0;
    timerMinSelection.value = 0;
    timerSecSelection.value = 0;
})

timerTimeText.addEventListener('click', () => {
    clearInterval(countdownInterval);
    timerTimeText.innerText = "00:00:00";
})

//Setting Up Stopwatch
stopwatchTime.addEventListener("click", () => {
    screenTap.play();
    clockTime.classList.remove("active-image-icon");
    stopwatchTime.classList.add("active-image-icon");
    timerTime.classList.remove("active-image-icon");
    clockTimeSection.style.display = "none";
    stopwatchSection.style.display = "flex";
    timerSection.style.display = "none";
})

let stopWatchms = 0;
let stopWatchs = 0;
let stopWatchm = 0;
let stopWatchh = 0;
let stopWatchInterval;
function startStopwatch() {
    function stopWatchBegin() {
        if (stopWatchms>=100) {
            if (stopWatchs>=59) {
                if (stopWatchm>=59) {
                    if (stopWatchh>=23) {
                        clearInterval(stopWatchBegin);
                    } else {
                        stopWatchh++;
                        stopWatchm=0;
                        stopWatchs=0;
                        stopWatchms=0;
                    }
                } else {
                    stopWatchm++;
                    stopWatchs=0;
                    stopWatchms=0;                  
                }
            } else {
                stopWatchs++;
                stopWatchms=0;
            }
        } else {
            stopWatchms++;
        }
        let frmtms = String(stopWatchms).padStart(2,'0');
        let frmts = String(stopWatchs).padStart(2,'0');
        let frmtm = String(stopWatchm).padStart(2,'0');
        let frmth = String(stopWatchh).padStart(2,'0');
        stopwatchTimeText.innerText = `${frmth}:${frmtm}:${frmts}:${frmtms}`;
    }
    stopWatchInterval = setInterval(stopWatchBegin, 10);
}

stopwatchStart.addEventListener('click', () => {
    startStopwatch();
    stopwatchSound.play();
    stopwatchStart.disabled = true;
    stopwatchStop.disabled = false;
});
stopwatchStop.addEventListener('click', () => {
    clearInterval(stopWatchInterval);
    stopwatchSound.pause();
    stopwatchStart.disabled = false;
    stopwatchStop.disabled = true;
})
stopwatchReset.addEventListener('click', () => {
    clearInterval(stopWatchInterval);
    stopwatchSound.pause();
    stopwatchTimeText.innerText = "00:00:00:00";
    stopwatchStart.disabled = false;
    stopwatchStop.disabled = false;
    stopWatchms = 0;
    stopWatchs = 0;
    stopWatchm = 0;
    stopWatchh = 0;
})

localStorage.setItem('muted', 1);
soundIcon.addEventListener("click", () => {
    if (localStorage.getItem('muted')==1) {
        localStorage.setItem('muted', 0);
        soundIcon.src = "resources/soundEnabled.png";
        allSound.forEach(element => {
            element.muted = true;
        })
    } else {
        localStorage.setItem('muted', 1);
        soundIcon.src = "resources/soundDisabled.webp";
        allSound.forEach(element => {
            element.muted = false;
        }) 
    }
})
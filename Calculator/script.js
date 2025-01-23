const preText = document.querySelector('.pre-text');
const postText = document.querySelector(".post-text");
const display = document.querySelector(".display");
const backspace = document.querySelector("#backspace");

const numbers = document.querySelectorAll(".buttons .numbers");
const allClear = document.querySelector("#all-clear");
const operators = document.querySelectorAll(".operator");
const equalsTo = document.querySelector("#equals");

const BASEurl = "https://api.mathjs.org/v4/?expr=2*3";
const themeBtn = document.querySelector("#calc");
const container = document.querySelector(".container");

//Reflecting digits in the display
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (postText.innerText=='0') {
            postText.innerText='';
        }
        postText.innerText+=number.innerText;
    })
})

//Reflecting operators in the display
operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        postText.innerText+=operator.value;
    })
})

allClear.addEventListener('click', () => {
    postText.innerText='0';
    preText.innerText='';
})

async function doIt(expression) {
    let response = await fetch(`https://api.mathjs.org/v4/?expr=${expression}`);
    let result;
    try {
        result = await response.json();
    } catch (error) {           //Handle Division by zero
        result = "Infinity";
    }
    preText.innerText = postText.innerText;
    postText.innerText = result;
}

equalsTo.addEventListener("click", () => {
    if ((postText.innerText).endsWith('/') || (postText.innerText).endsWith('*') || (postText.innerText).endsWith('/') || (postText.innerText).endsWith('-') || (postText.innerText).endsWith('+')) {
        display.style.animation = "borderBlink 1s ease-in-out 1 reverse none";
        setTimeout(() => {
            display.style.animation = "";
        }, 1000);
    } else {
        doIt(encodeURIComponent(postText.innerText));
    }
});

backspace.addEventListener('click', () => {
    if (!(postText.innerText=='0')) {
        postText.innerText = (postText.innerText).slice(0,(postText.innerText).length-1);
    }
})

//Set default theme black
localStorage.setItem("theme", "black");

themeBtn.addEventListener("click", ()=> {
    if (localStorage.getItem("theme")=="black") {
        localStorage.setItem("theme", "white");
        container.style.backgroundColor = "#fff";
        preText.style.color = "rgba(0, 0, 0, 0.7)"
        postText.style.color = "#000";
        themeBtn.style.backgroundImage = 'url("resources/lightMode.png")';
    } else {
        localStorage.setItem("theme", "black");
        container.style.backgroundColor = "#021526";
        preText.style.color = "rgba(255, 255, 255, 0.7)"
        postText.style.color = "#fff";
        themeBtn.style.backgroundImage = 'url("resources/darkMode.png")';
    }
})

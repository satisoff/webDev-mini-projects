const preText = document.querySelector('.pre-text');
const postText = document.querySelector(".post-text");
const display = document.querySelector(".display");
const backspace = document.querySelector("#backspace");

const numbers = document.querySelectorAll(".buttons .numbers");
const allClear = document.querySelector("#all-clear");
const operators = document.querySelectorAll(".operator");
const equalsTo = document.querySelector("#equals");

const BASEurl = "https://api.mathjs.org/v4/?expr=2*3";

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
        if ((postText.innerText).endsWith('0') && operator.value=='/') {
            return;
        }
        postText.innerText+=operator.value;
    })
})

allClear.addEventListener('click', () => {
    postText.innerText='0';
    preText.innerText='';
})

async function doIt(expression) {
    let response = await fetch(`https://api.mathjs.org/v4/?expr=${expression}`);
    let result = await response.json();
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
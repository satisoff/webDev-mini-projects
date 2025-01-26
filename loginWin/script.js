const userInput = document.querySelector(".username-input");
const passInput = document.querySelector(".pass-input");
const submit = document.getElementById("submit");
const others = document.querySelectorAll(".other-box button");
const container = document.querySelector(".container");
const eye = document.querySelector(".eye");

passInput.addEventListener("input", () => {
    if (passInput.value === "") {
        eye.style.display = "none";
    } else {
        eye.style.display = "block";
    }
});
eye.addEventListener("mousedown", () => {
    eye.src = "resources/openEye.png";
    passInput.type = "text";
})
eye.addEventListener("touchstart", (event) => {
    event.preventDefault();
    eye.src = "resources/openEye.png";
    passInput.type = "text";
})
eye.addEventListener("mouseup", () => {
    eye.src = "resources/closedEye.png";
    passInput.type = "password";
})
eye.addEventListener("touchend", (event) => {
    event.preventDefault()
    eye.src = "resources/closedEye.png";
    passInput.type = "password";
})

others.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.borderBottomLeftRadius = "10px"
        element.style.borderTopRightRadius = "10px"
        element.style.borderTopLeftRadius = "1px"
        element.style.borderBottomRightRadius = "1px"
    })
    element.addEventListener('mouseleave', () => {
        element.style.borderBottomLeftRadius = "1px"
        element.style.borderTopRightRadius = "1px"
        element.style.borderTopLeftRadius = "10px"
        element.style.borderBottomRightRadius = "10px"
    })

    element.addEventListener('mousedown', () => {
        element.style.transform = "scale(0.95)";
    })
    element.addEventListener('touchstart', () => {
        element.style.transform = "scale(0.9)";
    })
    element.addEventListener("mouseup", () => {
        element.style.transform = "scale(1)";
    })
    element.addEventListener("touchend", () => {
        element.style.transform = "scale(1)";
    })
})
const fetchImage = document.querySelector(".container-fetch-image");
const slideImage = document.querySelector(".container-slide-image");
const startSlideBtn = document.getElementById("startBtn");
const selectedFiles = document.getElementById("images")
const img1 = document.getElementById("slide-1-img");
const middleware = document.querySelector(".middleware");
const checkBox = document.getElementById("autoslide");
const wastedBtn = document.querySelector("header > h1");
const leftActionBtn = document.getElementById("action-left");
const rightActionBtn = document.getElementById("action-right");

let imgCur = 0;               //current image index on slide 1

function setImg(idx) {
    img1.src = URL.createObjectURL(selectedFiles.files[idx]);
}

function updateTotalImageSelected(paraText, setColor) {
    const totalImagesPara = document.createElement('p');
    totalImagesPara.innerHTML = paraText;
    totalImagesPara.style.color = setColor;
    middleware.removeChild(middleware.querySelector('p'));
    middleware.appendChild(totalImagesPara);
    middleware.style.height = "4rem";
}

startSlideBtn.addEventListener("click", () => {
    if (selectedFiles.files.length) {
        fetchImage.style.display = "none";
        slideImage.style.display = "block";
        setImg(imgCur);
        imgCur++;
        slideImage.focus();
    } else {
        updateTotalImageSelected("No Image Selected", 'tomato');
    }
})

selectedFiles.addEventListener("change", () => {    
    const total = selectedFiles.files.length;
    const totalImagesText = `${total} image${total<=1 ? "" : "s"} selected`;
    updateTotalImageSelected(totalImagesText, 'yellowgreen');
})

function autoSlideImages() {
    const keepGoing = setInterval( () => {
        if (checkBox.checked === false) {
            return clearInterval(keepGoing);
        }
        if (imgCur === selectedFiles.files.length-1) {
            checkBox.checked = false;
            return clearInterval(keepGoing);
        }
        slideImageRight()
    }, 3000);
}
checkBox.addEventListener("change", autoSlideImages);

function slideImageLeft() {
    if (imgCur) {
        imgCur--;
        setImg(imgCur);
        slideImage.classList.add("shifted-left");
        setTimeout( () => {
            slideImage.classList.remove("shifted-left")
        }, 300);
        leftActionBtn.classList.add("action-btn-pressed");
        setTimeout(() => {
            leftActionBtn.classList.remove("action-btn-pressed");
        }, 200);
        rightActionBtn.style.display = "block";                 //bring it back if disappeard   
    } else {
        leftActionBtn.style.display = "none";
    }
}

function slideImageRight() {
    if (imgCur !== selectedFiles.files.length-1) {
        imgCur++;
        setImg(imgCur);
        slideImage.classList.add("shifted-right");    
        setTimeout( () => {
            slideImage.classList.remove("shifted-right")
        }, 300);
        rightActionBtn.classList.add("action-btn-pressed");
        setTimeout(() => {
            rightActionBtn.classList.remove("action-btn-pressed");
        }, 200);
        leftActionBtn.style.display = "block";                  //bring it back if disappeard
    } else {
        rightActionBtn.style.display = "none";
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        slideImageLeft();
    } 
    if (e.key === "ArrowRight") {
        slideImageRight();
    }
});

leftActionBtn.addEventListener("click", slideImageLeft);
rightActionBtn.addEventListener("click", slideImageRight);
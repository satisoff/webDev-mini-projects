let fromCont = document.querySelector('.from-cont');
let toCont = document.querySelector('.to-cont');

let selects = document.querySelectorAll('select');

let fromImg = document.querySelector('.from-img');
let toImg = document.querySelector('.to-img');

let fromContTitle = document.querySelector('.from-cont-title');
let toContTitle = document.querySelector('.to-cont-title');

let fromAmount = document.querySelector('.amount-input');
let resultAmount = document.querySelector('.result-text');

let reversBtn = document.querySelector('.reverse-btn')

const updFlag = (cont, which) => {
    if (which==='from') {
        fromImg.src = `https://flagsapi.com/${cont}/flat/64.png`;
    } else {
        toImg.src = `https://flagsapi.com/${cont}/flat/64.png`;
    }
}

//update flag and set countryNames 
function flagChange(contCode, which) {
    updFlag(countryList[contCode], which);
    if (which === 'from') {
        fromContTitle.innerText = contCode;
    } else {
        toContTitle.innerText = contCode;
    }
}

//populate our options
for (let opts of selects) {
    for (let codes in countryList) {
        let newOpt = document.createElement('option');
        newOpt.innerText = codes;
        if (opts.name === 'from') {
            if (codes === 'USD') {
                newOpt.selected = 'selected';
                flagChange(codes, 'from');
            }
        } else if (opts.name === 'to') {
            if (codes === 'INR') {
                newOpt.selected = 'selected';
                flagChange(codes, 'to');
            }
        }
        newOpt.value = codes;
        opts.append(newOpt);
    }

    //APPLY FLAG CHANGe on both select
    opts.addEventListener('change', () => {
        updFlag(countryList[opts.value], opts.name);
        if (opts.name === 'from') {
            fromContTitle.innerText = opts.value;
        } else {
            toContTitle.innerText = opts.value;
        }
        setConversion();
    })
}

let submitBtn = document.querySelector('.submit');
let BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";

async function curConversion(fromCur, toCur){
    url = `https://latest.currency-api.pages.dev/v1/currencies/${fromCur}.json`;
    let response = await fetch(url);
    let promise = await response.json();
    let allCont = promise[fromCur];
    return allCont[toCur];          //returns a promise
};

function setConversion() {
    let fromSelCur = selects[0].value.toLowerCase();
    let toSelCur = selects[1].value.toLowerCase();
    let fromAmountEnter = parseInt(fromAmount.value);
    if (fromAmountEnter<1 || fromAmount.value==="") {
        fromAmount.value = 1;
    }
    curConversion(fromSelCur, toSelCur).then((rel) => {
        let exchRate = rel;
        let finalAmount = parseInt(fromAmount.value)*exchRate;
        resultAmount.innerText = finalAmount;
    })
}

submitBtn.addEventListener('click', setConversion);
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})
submitBtn.addEventListener("auxclick", clearAll);

function clearAll() {
    resultAmount.innerText="";
    fromAmount.value="";
}

reversBtn.addEventListener('click', () => {
    let forTo = selects[0].selectedOptions[0];
    let forFrom = selects[1].selectedOptions[0];
    selects[0].value = forFrom.value;
    flagChange(forFrom.value, 'from');
    selects[1].value = forTo.value;
    flagChange(forTo.value, 'to');
    setConversion();
})
reversBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

// Tap the result box to clear text
resultAmount.addEventListener('click', clearAll);

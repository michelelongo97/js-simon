// FUNCTIONS
function generateRandomNumbers() {
    for (let i = randomNumbers.length; i < 5; i++) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        } else {
            i--;
        }
    }
    numbersElm.textContent = randomNumbers.join(" ");
}


function start() {
    generateRandomNumbers();
    setTimeout(function() {
        viewNumbersElm.classList.add('insertnumbers');
        insertNumbersElm.classList.remove('insertnumbers');
    }, 30000);
}

// DOM ELEMENTS
const insertNumbersElm = document.querySelector(".insertnumbers");
const viewNumbersElm = document.querySelector(".viewnumbers");
const numbersElm = document.getElementById("numbers");
const confirmBtn = document.getElementById("confirmbtn");
const resultElm = document.getElementById("result");

//ARRAYS
let randomNumbers = [];
let userNumbers = [];

//EVENTS
confirmBtn.addEventListener("click", function() {
    userNumbers = [
        parseInt(document.getElementById("input1").value),
        parseInt(document.getElementById("input2").value),
        parseInt(document.getElementById("input3").value),
        parseInt(document.getElementById("input4").value),
        parseInt(document.getElementById("input5").value)
    ];
        
    const correctNumbers = userNumbers.filter(num => randomNumbers.includes(num));
    
    if (correctNumbers.length > 0) {
        resultElm.innerHTML = `Hai indovinato i numeri: ${correctNumbers.join(", ")}`;
    } else {
        resultElm.innerHTML = "Non hai indovinato nessun numero.";
    }
});

start();
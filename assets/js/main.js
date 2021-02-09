let myRequest = document.getElementById('ergebnis');


let minus1 = document.getElementById('minus1');
let minus10 = document.getElementById('minus10');
let minus100 = document.getElementById('minus100');


let plus1 = document.getElementById('plus1');
let plus10 = document.getElementById('plus10');
let plus100 = document.getElementById('plus100');


let resetReset = document.getElementById('reset');
let multi2 = document.getElementById('multi2');

let count = 0;
let reset = 0;

updateDisplay();


resetReset.addEventListener("click", () => {
    count = reset;
    updateDisplay();
});

multi2.addEventListener("click", () => {
    count *= 2;
    updateDisplay();
});

plus1.addEventListener("click", () => {
    count ++;
    updateDisplay();
})

plus10.addEventListener("click", () => {
    count += 10;
    updateDisplay();
})

plus100.addEventListener("click", () => {
    count += 100;
    updateDisplay();
})


minus1.addEventListener("click", () => {
    count --;
    updateDisplay();
})

minus10.addEventListener("click", () => {
    count -=10;
    updateDisplay();
})

minus100.addEventListener("click", () => {
    count -=100;
    updateDisplay();
})

function updateDisplay() {
    myRequest.innerHTML = count;

}
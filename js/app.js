// TODO: Tip in % increase/decrease
const tip = document.querySelector(".tip-value");
const increase = document.querySelector(".tip-increase");
const decrease = document.querySelector(".tip-decrease");

increase.addEventListener("click", function (e) {
    tip.value++;
    e.preventDefault();
});

decrease.addEventListener("click", function (e) {
    if (tip.value == 0) {
        tip.value -= false;
    }
    else {
        tip.value--;
    }
    e.preventDefault();
})

// TODO: Number of People counter
const inputBox = document.querySelector(".people-count");
const plusValue = document.querySelector(".plus-btn");
const minusValue = document.querySelector(".minus-btn");

plusValue.addEventListener("click", function (e) {
    inputBox.value++;
    e.preventDefault();
});

minusValue.addEventListener("click", function (e) {
    if (inputBox.value == 1) {
        inputBox.value -= false;
    }
    else {
        inputBox.value--;
    }
    e.preventDefault();
    // console.log(e);
});

// TODO: Lets calculate total tip
let generateBill = document.querySelector(".generate");

// Create new bill
generateBill.addEventListener('click', function () {
    let billValue = document.querySelector(".amount").value;
    let tipValue = document.querySelector(".tip-value").value;
    let totalTip = document.querySelector("#tip-amount");
    let totalBill = document.querySelector("#total-amount");
    let peopleCount = document.querySelector(".people-count");
    let perPerson = document.querySelectorAll(".per-person");

    if (peopleCount.value == 1) {
        totalTip.innerText = ((billValue * tipValue) / 100) + ' $';
        totalBill.innerText = (parseFloat(billValue) + parseFloat(totalTip.innerText)) + ' $';
    }
    else {
        totalTip.innerText = (((billValue * tipValue) / 100) / (peopleCount.value)) + ' $';
        totalBill.innerText = ((parseFloat(billValue) + parseFloat(totalTip.innerText)) / (peopleCount.value)) + ' $';

        perPerson[0].innerText = '(Per Person)';
        perPerson[1].innerText = '(Per Person)';
    }
});
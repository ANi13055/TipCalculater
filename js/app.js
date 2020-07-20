// TODO: Tip in % increase/decrease value
const tip = document.querySelector(".tip-value");
const tipIncrease = document.querySelector(".tip-increase");
const tipDecrease = document.querySelector(".tip-decrease");

tipIncrease.addEventListener("click", function (e) {
    tip.value++;
    e.preventDefault();
});

tipDecrease.addEventListener("click", function (e) {
    if (tip.value == 0) {
        tip.value -= false;
    }
    else {
        tip.value--;
    }
    e.preventDefault();
});

// TODO: Number of People counter
const inputBox = document.querySelector(".people-count");
const increasePeople = document.querySelector(".people-increase");
const decreasePeople = document.querySelector(".people-decrease");

increasePeople.addEventListener("click", function (e) {
    inputBox.value++;
    e.preventDefault();
});

decreasePeople.addEventListener("click", function (e) {
    if (inputBox.value == 1) {
        inputBox.value -= false;
    }
    else {
        inputBox.value--;
    }
    e.preventDefault();
});

// TODO: Lets calculate total tip bill
let generateBill = document.querySelector(".btn-generate");

// Create bill amount with tip
generateBill.addEventListener('click', function () {
    let billValue = document.querySelector(".bill-value").value;
    let tipValue = document.querySelector(".tip-value").value;
    let totalTip = document.querySelector(".tip-amount");
    let totalBill = document.querySelector(".total-amount");
    let peopleCount = document.querySelector(".people-count");
    let perPerson = document.querySelectorAll(".per-person");

    if (peopleCount.value == 1) {
        totalTip.innerText = ((billValue * tipValue) / 100) + ' $';

        totalBill.innerText = (parseFloat(billValue) + parseFloat(totalTip.innerText)) + ' $';
    }
    else {
        totalTip.innerText = ((billValue * tipValue) / 100) / (peopleCount.value) + ' $';

        totalBill.innerText = (parseFloat(billValue) + parseFloat(totalTip.innerText) / (peopleCount.value)) + ' $';

        for (i = 0; i < perPerson.length; i++) {
            perPerson[i].innerText = '(Per Person)'
        }
    }
});
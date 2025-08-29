const heartCountEl = document.getElementById("heartCount");
let heartCount = 0;

const heartButtons = document.querySelectorAll(".heartBtn");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    heartCount++;
    heartCountEl.innerText = heartCount;
  });
}
const coinCount = document.getElementById("coinCount");
let coins = parseInt(coinCount.innerText);

const callHistoryList = document.getElementById("callHistoryList");

const callButtons = document.querySelectorAll(".callBtn");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let card = callButtons[i].parentNode;
    while (card && !card.classList.contains("bg-white")) {
      card = card.parentNode;
    }

    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".phn-num").innerText;
    

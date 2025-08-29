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

const openDiaryLink = document.getElementById("openDiary");

openDiaryLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "home.html"; // Redirect to the next page
});


const openpreviousdiary = document.getElementById("previousDiary");

openpreviousdiary.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "previousdairies.html"; // Redirect to the next page
});







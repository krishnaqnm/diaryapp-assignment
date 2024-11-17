const video = document.getElementById("backgroundVideo");
const inputContainer = document.getElementById("inputContainer");
const diaryEntry = document.getElementById("diaryEntry");
const datepicker = document.getElementById("datepicker");
const dateDisplay = document.getElementById("dateDisplay");
const heroSection = document.querySelector(".hero");

if (video) {
  
  video.addEventListener("ended", function() {
    video.style.display = "none"; // Hide the video
    heroSection.style.display = "none"; // Hide the hero section
    inputContainer.style.display = "block"; // Show the input field
  });
}

function updateDateDisplay() {
    const selectedDate = datepicker.value;
    dateDisplay.innerText = `Date? ${selectedDate}`;
    hideDatepicker();
    
}

function hideDatepicker() {
    datepicker.style.display = 'none';
}







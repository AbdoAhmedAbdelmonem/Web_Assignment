// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Popup Functionality
const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");
const popupButton = document.getElementById("popupButton");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const showMessageBtn = document.getElementById("showMessageBtn");

const messages = [
  { title: "مسا مسا", message: "الويب ده فن مش عن عن" },
  { title: "صبح عالرجالة", message: "فورة ضومنة و نلعب علي اعمال السنة" },
  { title: "عايز اتجوز", message: "قد الدنيا والله بس مستنيها تقول يكتكوتي" },
  { title: "عايز فلوسي", message: "حق فطار الفول يوم الاربع الي فات فين" },
  { title: "مفيش مستوي", message: "ليفاي التوب والباقي كنتلوب" },
];

let currentIndex = 0;
function showRandomMessage() {
  const selectedMessage = messages[currentIndex];
  popupTitle.textContent = selectedMessage.title;
  popupMessage.textContent = selectedMessage.message;
  popupOverlay.classList.add("active");
  currentIndex = (currentIndex + 1) % messages.length;
}

function closePopup() {
  popupOverlay.classList.remove("active");
}

showMessageBtn.addEventListener("click", showRandomMessage);
popupClose.addEventListener("click", closePopup);
popupButton.addEventListener("click", closePopup);

// Close popup when clicking outside the popup content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

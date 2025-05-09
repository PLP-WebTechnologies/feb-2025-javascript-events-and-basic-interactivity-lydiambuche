// Button click changes text color
document.getElementById("colorBtn").addEventListener("click", function () {
    const text = document.getElementById("colorText");
    text.style.color = text.style.color === "blue" ? "black" : "blue";
});

// Double-click secret
document.getElementById("colorBtn").addEventListener("dblclick", function () {
    alert("Secret Action Triggered!");
});

// Slideshow functionality
const carImages = [
    "https://via.placeholder.com/500x300?text=Car+1",
    "https://via.placeholder.com/500x300?text=Car+2",
    "https://via.placeholder.com/500x300?text=Car+3"
];
let carIndex = 0;
document.getElementById("nextCar").addEventListener("click", function () {
    carIndex = (carIndex + 1) % carImages.length;
    document.getElementById("carImage").src = carImages[carIndex];
});

// Tab toggle
document.querySelectorAll(".tabBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("passwordFeedback");
    feedback.textContent = this.value.length < 8 ? "Password must be at least 8 characters" : "";
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
        alert("Please fill out all required fields correctly.");
    }
});

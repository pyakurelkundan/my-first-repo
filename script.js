// Form processing only

const form = document.querySelector("form");
const submitBtn = document.getElementById("submitbtn");

function showMessage(text, type) {
  // Remove old message
  const oldMsg = document.querySelector(".form-msg");
  if (oldMsg) oldMsg.remove();

  const msg = document.createElement("p");
  msg.className = `form-msg ${type}`;
  msg.textContent = text;

  form.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (name === "") {
    showMessage("❌ Please enter your full name", "error");
    return;
  }

  if (email === "") {
    showMessage("❌ Please enter your email", "error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage("❌ Invalid email format", "error");
    return;
  }

  if (message === "") {
    showMessage("❌ Please write a message", "error");
    return;
  }

  // Success (front-end processing)
  showMessage("✅ Message submitted successfully!", "success");
  form.reset();
});

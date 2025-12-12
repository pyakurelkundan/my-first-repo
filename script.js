

const form = document.querySelector("form");
const submitBtn = document.getElementById("submitbtn");

function showMessage(text, type) {
  
  const oldMsg = document.querySelector(".form-msg");
  if (oldMsg) oldMsg.remove();

  const msg = document.createElement("p");
  msg.className = `form-msg ${type}`;
  msg.textContent = text;

  form.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  if (name === "") {
    showMessage(" Please enter your full name", "error");
    return;
  }

  if (email === "") {
    showMessage(" Please enter your email", "error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage(" Invalid email format", "error");
    return;
  }

  if (message === "") {
    showMessage(" Please write a message", "error");
    return;
  }

  
  showMessage(" Message submitted successfully!", "success");
  form.reset();
});

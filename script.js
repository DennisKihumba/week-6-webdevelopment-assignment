// Week 6 Assignment - JavaScript Interactivity

// 1. Event Handling: Change background color when button is clicked
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function () {
  // Generate random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// 2. Event Handling: Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("passwordField");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

// 3. Custom Form Validation
const form = document.getElementById("myForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("formPassword").value.trim();

  // Validation checks
  if (username === "") {
    formMessage.textContent = "Username cannot be empty.";
    formMessage.style.color = "red";
    return;
  }

  // Simple email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If everything is valid
  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";

  // Reset form
  form.reset();
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const email = document.getElementById("email");
  const phone = document.getElementById("telephone");
  const successMsg = document.createElement("p");

  // Remove old errors
  document.querySelectorAll(".error").forEach(el => el.remove());

  let valid = true;

  if (!email.value.includes("@")) {
    showError(email, "Please enter a valid email address.");
    valid = false;
  }

  if (phone.value.length < 10) {
    showError(phone, "Please enter a valid phone number.");
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully! We will contact you soon.";
    successMsg.classList.add("success");
    form.appendChild(successMsg);
    form.reset();
  }
});

function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = message;
  input.parentNode.appendChild(error);
}
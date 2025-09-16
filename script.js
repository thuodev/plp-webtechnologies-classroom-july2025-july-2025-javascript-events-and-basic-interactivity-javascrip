// ========== PART 1: EVENT HANDLING ==========

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter functionality
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increase-btn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("reset-btn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ========== PART 2: INTERACTIVE ELEMENTS ==========

// FAQ toggle
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  const question = faq.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});

// ========== PART 3: FORM VALIDATION ==========

const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default form submit
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (minimum 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message if all fields are valid
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    signupForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});

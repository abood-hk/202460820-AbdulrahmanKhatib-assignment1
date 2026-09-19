const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const greeting = document.getElementById("greeting");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const currentYear = document.getElementById("current-year");

// Display a greeting based on the current time.
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning. Welcome to my portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon. Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening. Welcome to my portfolio.";
}

// Load the user's saved theme preference.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "Light mode";
}

// Toggle between light mode and dark mode.
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  themeToggle.textContent = isDarkMode ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Show a confirmation message when the form is submitted.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Thank you for your message. I will get back to you soon.";

  contactForm.reset();
});

// Display the current year in the footer.
currentYear.textContent = new Date().getFullYear();

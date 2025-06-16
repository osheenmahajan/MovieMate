// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Switch between Login and Sign-Up forms
  const loginSwitcher = document.querySelector(".switcher-login");
  const signupSwitcher = document.querySelector(".switcher-signup");
  const loginFormWrapper = document.querySelector(".form-login");
  const signupFormWrapper = document.querySelector(".form-signup");
  const loginForm = document.querySelector(".form-login");
  const signupForm = document.querySelector(".form-signup");

  // Switch to login form
  loginSwitcher.addEventListener("click", function () {
    loginFormWrapper.parentElement.classList.add("is-active");
    signupFormWrapper.parentElement.classList.remove("is-active");
  });

  // Switch to signup form
  signupSwitcher.addEventListener("click", function () {
    signupFormWrapper.parentElement.classList.add("is-active");
    loginFormWrapper.parentElement.classList.remove("is-active");
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Collect email and password inputs
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    // Simple validation check (you can replace this with your validation logic)
    if (email && password) {
      alert("Logged in successfully!");
      // Redirect to home page or dashboard after successful login
      window.location.href = "index.html";
    } else {
      alert("Please fill in all login fields.");
    }
  });

  // Handle signup form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Collect sign-up input values
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    const confirmPassword = document.querySelector(
      "#signup-password-confirm"
    ).value;

    // Simple validation check (you can enhance this)
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Sign-up successful!");
        // Redirect to home page after successful sign-up
        window.location.href = "index.html";
      } else {
        alert("Passwords do not match.");
      }
    } else {
      alert("Please fill in all sign-up fields.");
    }
  });
});

// Show Password Feature
let passwordInput = document.getElementById("password");
let checkboxInput = document.getElementById("showPassword");

// Logic Show Password
checkboxInput.addEventListener("change", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

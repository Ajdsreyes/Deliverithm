document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginBtn = document.querySelector('.login-btn');
    const togglePass = document.getElementById('togglePass');
    const createAccountLink = document.querySelector('a[href="#createAccount"]');
    const personnelLink = document.querySelector('a[href="#adminLogin"]');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    function validateLogin() {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!email || !password) {
        alert("Please enter both email and password.");
        return false;
      }
  
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      return true;
    }
  
    function handleLogin(e) {
      e.preventDefault();
      if (validateLogin()) {
        window.location.href = "UserDashboard.html"; 
      }
    }
  
    loginBtn.addEventListener("click", handleLogin);
  
    [emailInput, passwordInput].forEach(input => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          handleLogin(e);
        }
      });
    });
  
    if (togglePass) {
      togglePass.addEventListener("change", () => {
        passwordInput.type = togglePass.checked ? "text" : "password";
      });
    }
  
    if (createAccountLink) {
      createAccountLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "CreateAccount.html";
      });
    }
  
    if (personnelLink) {
      personnelLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "AdminLogin.html";
      });
    }
  });
  
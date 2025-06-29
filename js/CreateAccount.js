document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.querySelector('.input-row input:nth-child(1)');
    const lastName = document.querySelector('.input-row input:nth-child(2)');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="phone"]');
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const createBtn = document.querySelector('.login-btn');
    const backBtn = document.querySelector('.back-button');
  
    function validateInputs() {
      if (
        !firstName.value.trim() ||
        !lastName.value.trim() ||
        !emailInput.value.trim() ||
        !phoneInput.value.trim() ||
        !usernameInput.value.trim() ||
        !passwordInput.value.trim()
      ) {
        alert("Please fill in all fields.");
        return false;
      }
      
      // for email and phone number needed info
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{10,15}$/;
  
      if (!emailPattern.test(emailInput.value.trim())) {
        alert("Enter a valid email address.");
        return false;
      }
  
      if (!phonePattern.test(phoneInput.value.trim())) {
        alert("Enter a valid phone number.");
        return false;
      }
  
      return true;
    }
  
    createBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (validateInputs()) {
        alert("Account created. Please log in.");
        window.location.href = "UserLogin.html";
      }
    });
  
    // account creation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        createBtn.click();
      }
    });
  
    // back button
    backBtn.addEventListener("click", () => {
      window.location.href = "UserLogin.html";
    });
  });
  
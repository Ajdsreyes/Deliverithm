document.addEventListener("DOMContentLoaded", () => {
    const idInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginBtn = document.querySelector('.login-btn');
    const userRedirectLink = document.querySelector('.links a');
  
    //validation
    function validateAdminLogin() {
      const id = idInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!id || !password) {
        alert("Please enter both Employee ID and Password.");
        return false;
      }
  
      // You can add more specific validation if needed (e.g., ID format)
      return true;
    }
  
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (validateAdminLogin()) {
        window.location.href = "AdminDashboard.html"; // admin dashboard
      }
    });
  
    //log in
    [idInput, passwordInput].forEach(input => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          loginBtn.click();
        }
      });
    });
  
    //to user login
    if (userRedirectLink) {
      userRedirectLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "UserLogin.html"; 
      });
    }
  });
  
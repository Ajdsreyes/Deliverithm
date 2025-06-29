document.addEventListener("DOMContentLoaded", function () {
    const proceedBtn = document.querySelector(".proceed-btn");
    const modal = document.getElementById("confirmation-modal");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
  
    const form = document.querySelector(".shipment-form");
    const inputs = form.querySelectorAll("input, select");
  
    //for proceed button
    proceedBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      let valid = true;
      let senderEmail = "";
      let receiverEmail = "";
      let postalCode = "";
      let packageWeight = "";
  
      inputs.forEach((input) => {
        const value = input.value.trim();
  
        if (value === "" || value === "Select Type") {
          valid = false;
        }
        if (input.placeholder === "Sender Email") {
          senderEmail = value;
        }
        if (input.placeholder === "Receiver Email") {
          receiverEmail = value;
        }
        if (input.placeholder === "Postal Code") {
          postalCode = value;
        }
        if (input.placeholder === "Weight (kg)") {
          packageWeight = value;
        }
      });
  
      //empty field
      if (!valid) {
        alert("Please fill in all fields.");
        return;
      }
  
      //for email validation
      if (
        !senderEmail.toLowerCase().endsWith("@gmail.com") ||
        !receiverEmail.toLowerCase().endsWith("@gmail.com")
      ) {
        alert("Sender and Receiver email must be valid @gmail.com addresses.");
        return;
      }
  
      //postal validation
      if (isNaN(postalCode)) {
        alert("Postal Code must be a number.");
        return;
      }
  
      if (isNaN(packageWeight)) {
        alert("Package Weight must be a number.");
        return;
      }
  
      // all valid
      modal.classList.remove("hidden");
    });
  
    // yes
    yesBtn.addEventListener("click", () => {
      window.location.href = "PickupInfoCS.html"; 
    });
  
    // no
    noBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // back button
    const backButton = document.querySelector(".back-button");
    if (backButton) {
      backButton.addEventListener("click", () => {
        window.location.href = "UserDashboard.html";
      });
    }
  
    // header navigation
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const text = link.textContent.trim().toLowerCase();
  
        if (text === "dashboard") {
          window.location.href = "UserDashboard.html";
        } else if (text === "shipping history") {
          window.location.href = "ShippingHistory.html";
        } else if (text === "contact us") {
          window.location.href = "ContactUs.html";
        }
      });
    });
  });
  
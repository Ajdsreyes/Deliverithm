document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".pickup-form");
  const proceedBtn = document.querySelector(".proceed-btn");
  const backBtn = document.querySelector(".back-button");
  const modal = document.getElementById("confirm-modal");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const navLinks = document.querySelectorAll(".nav-links a");


  const isNumeric = (value) => /^\d+$/.test(value.trim());
  const isContactValid = (value) => /^\d{11}$/.test(value.trim());

  function validateForm() {
    const inputs = form.querySelectorAll("input");
    let contactNum = "";
    let postalCode = "";
    let allFilled = true;

    inputs.forEach(input => {
      const val = input.value.trim();
      if (val === "") allFilled = false;
      if (input.placeholder === "Contact Number") contactNum = val;
      if (input.placeholder === "Postal Code") postalCode = val;
    });

    if (!allFilled) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!isContactValid(contactNum)) {
      alert("Contact Number must be exactly 11 digits.");
      return false;
    }

    if (!isNumeric(postalCode)) {
      alert("Postal Code must contain numbers only.");
      return false;
    }

    return true;
  }

  // proceed button
  proceedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      modal.classList.remove("hidden");
    }
  });

  // yes
  yesBtn.addEventListener("click", () => {
    window.location.href = "DateTimeCS.html";
  });

  // no
  noBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // back button
  backBtn.addEventListener("click", () => {
    window.location.href = "CreateShipment.html";
  });

  // Navigation
  navLinks.forEach(link => {
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

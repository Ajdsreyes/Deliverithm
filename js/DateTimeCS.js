document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".pickup-form");
    const modal = document.getElementById("confirm-modal");
    const okBtn = document.getElementById("ok-btn");
    const backBtn = document.getElementById("backBtn");
  
    // header navigation
    const navMap = {
      dashboard: "UserDashboard.html",
      create: "CreateShipment.html",
      history: "ShippingHistory.html",
      contact: "ContactUs.html"
    };
  
    for (const id in navMap) {
      const link = document.getElementById(id);
      if (link) {
        link.addEventListener("click", e => {
          e.preventDefault();
          window.location.href = navMap[id];
        });
      }
    }
  
    // validation for date and time
    const dateOK = d => /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(d.trim());
    const timeOK = t => /^(0?[1-9]|1[0-2])(:[0-5][0-9])?$/.test(t.trim());
  
    function validate() {
      const date = document.getElementById("pickup-date");
      const earliest = document.getElementById("earliest-time");
      const earliestAm = document.getElementById("earliest-ampm");
      const latest = document.getElementById("latest-time");
      const latestAm = document.getElementById("latest-ampm");
      const special = document.getElementById("special-instructions");
  
      const fields = [date, earliest, earliestAm, latest, latestAm, special];
  
      // all fields should be filled
      for (const f of fields) {
        if (!f.value.trim()) {
          alert("Please fill in all fields.");
          return false;
        }
      }
  
      if (!dateOK(date.value)) {
        alert("Date must be in MM/DD/YYYY format.");
        return false;
      }
  
      if (!timeOK(earliest.value) || !timeOK(latest.value)) {
        alert("Pickup time must be in proper format (e.g., 9:30).");
        return false;
      }
  
      return true;
    }
  
    // form submission
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (validate()) {
        modal.classList.remove("hidden");
        modal.classList.add("show");
      }
    });
  
    // form submission - ok button
    okBtn.addEventListener("click", () => {
      window.location.href = "UserDashboard.html";
    });
  
    // form submission - back button
    backBtn.addEventListener("click", () => {
      window.location.href = "PickupInfoCS.html";
    });
  });
  
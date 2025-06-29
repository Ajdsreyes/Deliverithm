document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".card-link");
  
    links.forEach((link) => {
      link.style.cursor = "pointer";
  
      link.addEventListener("click", () => {
        const text = link.textContent.trim().toLowerCase();
  
        if (text === "create shipment") {
          window.location.href = "CreateShipment.html";
        } else if (text === "shipping history") {
          window.location.href = "ShippingHistory.html";
        } else if (text === "contact us") {
          window.location.href = "ContactUs.html";
        }
      });
    });
  });
  
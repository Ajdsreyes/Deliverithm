document.addEventListener("DOMContentLoaded", () => {
    
    // header navigation
    const navMap = {
      "Dashboard": "UserDashboard.html",
      "Create Shipment": "CreateShipment.html",
      "Shipping History": "ShippingHistory.html"
    };
  
    const links = document.querySelectorAll(".nav-links a");
  
    links.forEach(link => {
      const text = link.textContent.trim();
      if (navMap[text]) {
        link.addEventListener("click", e => {
          e.preventDefault();
          window.location.href = navMap[text];
        });
      }
    });
  });
  
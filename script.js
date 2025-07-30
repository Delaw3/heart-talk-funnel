window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("emailPopup");
  const form = document.getElementById("emailForm");
  const bookSection = document.getElementById("bookSection");
  const loader = document.getElementById("loader");

  const params = new URLSearchParams(window.location.search);
  const fromShared = params.get("from") === "shared";
  const emailCollected = localStorage.getItem("emailCollected") === "true";

  // Show popup if link is shared or if email not collected
  if (fromShared || !emailCollected) {
    setTimeout(() => {
      popup.classList.remove("hidden");
    }, 3000);
  } else {
    bookSection.classList.remove("hidden");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstNameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (email && firstName) {
      // Save to localStorage
      localStorage.setItem("emailCollected", "true");
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("email", email);

      // Send to webhook
      fetch("https://hearttalk.app.n8n.cloud/webhook-test/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      popup.classList.add("hidden");
      loader.classList.remove("hidden");

      setTimeout(() => {
        loader.classList.add("hidden");
        bookSection.classList.remove("hidden");
      }, 2500);
    }
  });
});

 
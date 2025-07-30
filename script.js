window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("emailPopup");
  const form = document.getElementById("emailForm");
  const bookSection = document.getElementById("bookSection");
  const loader = document.getElementById("loader");

  const params = new URLSearchParams(window.location.search);
  const fromShared = params.get("from") === "shared";
  const emailCollected = localStorage.getItem("emailCollected") === "true";

  // Only show popup if link is shared OR if no email is collected
  if (fromShared || !emailCollected) {
    setTimeout(() => {
      popup.classList.remove("hidden");
    }, 3000);
  } else {
    bookSection.classList.remove("hidden");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput").value.trim();
    if (email) {
      // Store that email was collected
      localStorage.setItem("emailCollected", "true");

      popup.classList.add("hidden");
      loader.classList.remove("hidden");

      setTimeout(() => {
        loader.classList.add("hidden");
        bookSection.classList.remove("hidden");
      }, 2500);
    }
  });
});

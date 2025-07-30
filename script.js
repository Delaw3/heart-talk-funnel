window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("emailPopup");
  const form = document.getElementById("emailForm");
  const bookSection = document.getElementById("bookSection");
  const loader = document.getElementById("loader");

  // Show the email popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 3000);

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput").value.trim();
    if (email) {
      // Hide the popup
      popup.classList.add("hidden");

      // Show loader
      loader.classList.remove("hidden");

      // After delay, hide loader and show books
      setTimeout(() => {
        loader.classList.add("hidden");
        bookSection.classList.remove("hidden");
      }, 2500);
    }
  });
});

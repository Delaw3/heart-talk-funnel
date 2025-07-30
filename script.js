document.addEventListener("DOMContentLoaded", () => {
  const emailPopup = document.getElementById("emailPopup");
  const loader = document.getElementById("loader");
  const bookSection = document.getElementById("bookSection");
  const emailForm = document.getElementById("emailForm");

  // Show email popup after 3 seconds
  setTimeout(() => {
    emailPopup.classList.remove("hidden");
  }, 3000);

  emailForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Optional: collect email value
    const email = document.getElementById("emailInput").value;

    // Show loader
    loader.classList.remove("hidden");

    // Simulate loading
    setTimeout(() => {
      // Hide popup and loader
      emailPopup.classList.add("hidden");
      loader.classList.add("hidden");

      // Show book section
      bookSection.classList.remove("hidden");
    }, 2000); // 2 seconds loading
  });
});

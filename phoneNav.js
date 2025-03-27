function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Close the nav panel if clicking outside of it.
document.addEventListener("click", function(event) {
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  // If nav is open and click target is not inside nav-links or on the toggle button, close it.
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navLinks.classList.remove("show");
  }
});


// Smooth Scroll handled via CSS 'scroll-behavior: smooth'
// Add simple hover animation to sections

document.querySelectorAll("section").forEach((section) => {
  section.addEventListener("mouseover", function () {
    section.style.transform = "scale(1.02)";
    section.style.boxShadow = "0 6px 24px rgba(11,194,207,0.13)";
    section.style.transition = "0.3s";
  });
  section.addEventListener("mouseout", function () {
    section.style.transform = "scale(1)";
    section.style.boxShadow = "none";
    section.style.transition = "0.3s";
  });
});

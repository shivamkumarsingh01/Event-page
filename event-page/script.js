// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(section.id)) {
          link.classList.add("active");
        }
      });
    }
  });

  // Show back to top button
  const btn = document.getElementById("backToTop");
  if (scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top on click
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//////*
 //Toggle speaker bio on click
function toggleBio(element) {
  element.classList.toggle("active");
}

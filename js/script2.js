// Scroll timeline logic
const sections = document.querySelectorAll("section");
const points = document.querySelectorAll(".point");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  points.forEach((point) => {
    point.classList.remove("active");
    if (point.dataset.target === `#${current}`) {
      point.classList.add("active");
    }
  });
});

// Timeline dot scroll
points.forEach(point => {
  point.addEventListener("click", () => {
    const target = document.querySelector(point.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar toggle
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

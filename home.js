// ===== Бургер-меню =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});

// ===== Закрытие меню при клике на ссылку =====
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("open");
  });
});

// ===== Анимация появления элементов при скролле =====
const animElements = document.querySelectorAll(
  ".car-card, .info-card, .review-card"
);

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.animationDelay = `${Math.random() * 0.3}s`;
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// ===== Эффект для кнопок (необязательно, но красиво) =====
document.querySelectorAll(".btn, .btn-more").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");

let x = 50;
let y = 20;
let dx = 0.15;
let dy = 0.12;

// Slow continuous floating movement
function floatNoButton() {
  const container = document.querySelector(".buttons");
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= maxX) dx *= -1;
  if (y <= 0 || y >= maxY) dy *= -1;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  requestAnimationFrame(floatNoButton);
}

floatNoButton();

// If user tries to hover / touch NO → it escapes faster
noBtn.addEventListener("mouseenter", () => {
  dx = (Math.random() > 0.5 ? 1 : -1) * 1.2;
  dy = (Math.random() > 0.5 ? 1 : -1) * 1.2;
});

noBtn.addEventListener("touchstart", () => {
  dx = (Math.random() > 0.5 ? 1 : -1) * 1.2;
  dy = (Math.random() > 0.5 ? 1 : -1) * 1.2;
});

// YES button click
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  celebration.classList.remove("hidden");
  launchConfetti();
});

// Heart trail
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
});

// Confetti
function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const conf = document.createElement("div");
    conf.innerHTML = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = "20px";
    conf.style.animation = "fall 2s linear forwards";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 2000);
  }
}

// Confetti animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

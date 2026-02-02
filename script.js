const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 50;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  celebration.classList.remove("hidden");
  launchConfetti();
});

// Heart trail on mouse move
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
});

// Simple confetti
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

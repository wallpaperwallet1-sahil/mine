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

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";

  const heartbeat = document.getElementById("heartbeat");
  heartbeat.classList.remove("hidden");

  setTimeout(() => {
    heartbeat.classList.add("hidden");
    celebration.classList.remove("hidden");
    typeMessage();
    showSinceCounter();
    launchConfetti();
  }, 2000);
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

// Typing effect
const message = `Yayyy 🥰
You just made my heart do a happy dance 💃❤️

Our 3rd Valentine together and somehow you make it sweeter every time 🌹
Happy Valentine’s Day, M.K 💕
— Sahil`;

function typeMessage() {
  const target = document.getElementById("typedText");
  let i = 0;

  const typing = setInterval(() => {
    target.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    if (i >= message.length) clearInterval(typing);
  }, 40);
}

// Since counter (change start date if needed)
function showSinceCounter() {
  const startDate = new Date("2022-02-14"); // ❤️ change if needed
  const today = new Date();
  const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  document.getElementById("sinceCounter").innerText =
    `Loving you since ${days} days 💕`;
}

// Secret message
document.getElementById("secretHeart").addEventListener("click", () => {
  document.getElementById("secretMsg").classList.toggle("hidden");
});


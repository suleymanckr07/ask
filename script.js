/* ═══════════════════════════════════════════
   BILGE'YE DAİR — script.js
   ═══════════════════════════════════════════ */

// ── CONFIG ──
const RELATIONSHIP_START = "2026-03-21T00:00:00+03:00";

const images = [
  "images/33c9807a-1873-4198-beaf-86bbc9e30661.jpg",
  "images/IMG_0798.jpeg",
  "images/IMG_0799.jpeg",
  "images/IMG_0847.jpeg",
  "images/IMG_0953.jpeg",
  "images/IMG_1135.jpeg",
  "images/IMG_1136.jpeg",
  "images/IMG_1137.jpeg",
  "images/IMG_1210.jpeg",
  "images/IMG_1212.jpeg",
  "images/IMG_1230.jpeg",
  "images/IMG_1267.jpeg",
  "images/IMG_1279.jpeg",
  "images/IMG_1291.jpeg",
  "images/IMG_1386.jpeg",
  "images/IMG_1521.jpeg",
  "images/IMG_1527.jpeg",
  "images/IMG_1562.jpeg",
  "images/IMG_1575.jpeg",
  "images/IMG_1598.jpeg",
  "images/IMG_1612.jpeg",
  "images/IMG_1785.jpeg",
  "images/IMG_1879.jpeg",
  "images/IMG_1891.jpeg",
  "images/IMG_9194.jpeg",
  "images/d93bebba-cf0f-4b8a-8fcd-c5ad492ce48d.jpg",
];

const allQuotes = [
  "Sen geldin, kalbim kendine ait en güzel evi buldu.",
  "İyi ki 21 Mart sadece bir tarih değil, bizim başlangıcımız oldu.",
  "Bazı insanlar huzur gibi gelir; sen bana öyle geldin.",
  "Her yeni gün, seni biraz daha çok sevdiğimi fark ediyorum.",
  "Seninle sıradan bir an bile, en güzel hatıraya dönüşüyor.",
  "Kalbimin en sevdiği hikaye, senin adınla başlıyor.",
  "Seninle her mevsim biraz daha içime bahar oluyor.",
  "Gülüşün, günün en sevdiğim anı olmaya devam ediyor.",
  "Aşk bazen bir cümle değil, bir insanın varlığıdır. O sen.",
  "İyi ki kalbim seni tanımış, iyi ki biz olmuşuz.",
  "Seni sevmek, en doğal halimde varolmak gibi hissettiriyor.",
  "Birlikte olduğumuz her an, dünyanın en güzel yeri burası.",
  "Kalbim seni her düşündüğünde, içimde küçük bir kutlama başlıyor.",
  "Seninle geçen her dakika, bir ömre bedeldir.",
  "Elini tuttuğumda, tüm dünya yerine geliyor.",
  "Sen olmadan önce de bir hayatım vardı; ama bu kadar güzel değildi.",
  "Bilge… sadece adın bile içimi ısıtıyor.",
  "Seninle gülmek, dünyadaki en güzel ses.",
];

const messages = [
  { icon: "🌸", title: "Hayatıma Işık Gibi Dokundun", text: "Seninle birlikte günler sadece geçmiyor, güzelleşiyor. Varlığın her şeyi daha yumuşak, daha anlamlı ve daha umut dolu yapıyor." },
  { icon: "💕", title: "Yanımda Olduğun İçin", text: "Bazen sadece sesini duymak bile bütün yorgunluğumu alıyor. Çünkü sen, kalbimin dinlenebildiği en güzel yer gibisin." },
  { icon: "🌹", title: "Seninle Biz Olmak", text: "Seninle kurduğumuz bu bağ, benim için sadece bir ilişki değil; güven, şefkat, dostluk ve büyük bir aşkın aynı yerde buluşması." },
  { icon: "✨", title: "İyi ki Sen", text: "Hayatımda olduğun için o kadar mutluyum ki... Bazen bunu kelimelerle anlatmak zor geliyor, ama içim hep aynı şeyi söylüyor: İyi ki sen." },
  { icon: "😊", title: "Gülüşün", text: "Gülüşünü her gördüğümde dünyadaki bütün telaş bir anlığına duruyor sanki. O an sadece sen, ben ve huzur kalıyor." },
  { icon: "🌙", title: "Sonsuz Dileğim", text: "Dilerim birlikte daha çok anı biriktirelim, daha çok sarılalım, daha çok gülelim ve bu güzel hikayeyi el ele daha da büyütelim." },
  { icon: "🎀", title: "Kalbimin En Güzel Tesadüfü", text: "Seninle karşılaşmış olmak, hayatın bana yaptığı en zarif sürpriz gibi. İyi ki yollarımız aynı duyguda buluşmuş." },
  { icon: "🕊️", title: "Huzurun Adı", text: "Bazen mutluluk yüksek sesle gelmez; sessizce kalbine oturur. Sen benim içimde tam da öyle bir yer oldun." },
];

const promiseNotes = [
  { icon: "💗", title: "Seni Sevmek", text: "Seni sevmek benim için bir his değil sadece; her güne daha umutla bakma sebebim." },
  { icon: "🤝", title: "Yanında Olmak", text: "Dünyanın neresinde olursam olayım, kalbimin en sakin yeri hep senin yanın gibi geliyor." },
  { icon: "📖", title: "Bizim Hikayemiz", text: "Bu ilişkiyi özel yapan şey sadece aşk değil; içindeki emek, samimiyet ve birbirimize iyi gelen o güzel bağ." },
];

const captions = [
  "Bir anı, bin gülümseme.",
  "Kalbimin en sevdiği kare.",
  "Bize en çok yakışan: beraberlik.",
  "Zamana bırakılmayacak kadar güzel.",
  "İçim ısınsın diye baktığım fotoğraf.",
  "Yüzümdeki gülümsemenin sebebi sensin.",
];

const ribbonQuotes = [
  "Seninle her mevsim biraz daha içime bahar oluyor.",
  "Kalbim, adını en çok huzurla birlikte anıyor.",
  "Birlikte olduğumuz her an, dünyayı daha güzel hissettiriyor.",
  "Senin gülüşün, günün en sevdiğim anı olmaya devam ediyor.",
  "Aşk bazen bir cümle değil, bir insanın varlığıdır. Benim için o sensin.",
  "İyi ki kalbim seni tanımış, iyi ki biz olmuşuz.",
];

// ── UTILS ──
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── CURSOR GLOW ──
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// ── PETALS ──
function createPetals() {
  const container = document.getElementById("petalsContainer");
  const petalChars = ["🌸", "🌺", "💮", "🌼"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.textContent = pick(petalChars);
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (6 + Math.random() * 10) + "s";
    p.style.animationDelay = (Math.random() * 12) + "s";
    p.style.fontSize = (0.7 + Math.random() * 0.8) + "rem";
    container.appendChild(p);
  }
}

// ── INTRO ──
function buildIntro() {
  const container = document.getElementById("introPolaroids");
  const shuffled = shuffle(images).slice(0, 5);
  const rotations = [-8, -3, 2, 6, -5];
  shuffled.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "intro-pol";
    div.style.setProperty("--r", rotations[i % rotations.length] + "deg");
    const img = document.createElement("img");
    img.src = src; img.alt = "Anımız";
    div.appendChild(img);
    container.appendChild(div);
  });
}

function setupIntro() {
  const overlay = document.getElementById("introOverlay");
  const enterBtn = document.getElementById("introEnter");

  // Click "Dokunarak gir" → dismiss
  enterBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    tryPlayMusic();
  });

  // Also auto-dismiss after 5s as fallback
  setTimeout(() => {
    if (!overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    }
  }, 5000);
}

// ── MUSIC — THE FIXED VERSION ──
const loveSong = document.getElementById("loveSong");
const musicBtn = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
let musicStarted = false;

function setMusicPlaying(playing) {
  if (playing) {
    musicBtn.classList.add("playing");
    musicLabel.textContent = "Durdur";
  } else {
    musicBtn.classList.remove("playing");
    musicLabel.textContent = "Müzik";
  }
}

async function tryPlayMusic() {
  if (musicStarted) return;
  try {
    loveSong.volume = 0.8;
    await loveSong.play();
    musicStarted = true;
    setMusicPlaying(true);
  } catch (e) {
    // Autoplay blocked — user must click
  }
}

musicBtn.addEventListener("click", async () => {
  if (loveSong.paused) {
    try {
      loveSong.volume = 0.8;
      await loveSong.play();
      musicStarted = true;
      setMusicPlaying(true);
    } catch (e) { }
  } else {
    loveSong.pause();
    setMusicPlaying(false);
  }
});

// One-time click anywhere to start music (if not started yet)
document.addEventListener("click", () => {
  if (!musicStarted) tryPlayMusic();
}, { once: true });

// ── HERO ──
function buildHero() {
  const shuffled = shuffle(images);

  // Main hero image
  const heroImg = document.getElementById("heroImg");
  heroImg.src = shuffled[0];

  // Promise section image
  const promiseImg = document.getElementById("promiseImg");
  promiseImg.src = shuffled[1];

  // Floating mini cards
  const floaters = document.getElementById("heroFloaters");
  const positions = [
    { top: "8%", left: "-15%", r: "-6deg", d: "0s" },
    { top: "55%", right: "-12%", r: "5deg", d: "0.5s" },
    { top: "78%", left: "-10%", r: "3deg", d: "1s" },
  ];
  shuffled.slice(2, 5).forEach((src, i) => {
    const card = document.createElement("div");
    card.className = "hero-float";
    const pos = positions[i];
    card.style.top = pos.top || "auto";
    if (pos.left) card.style.left = pos.left;
    if (pos.right) card.style.right = pos.right;
    card.style.setProperty("--r", pos.r);
    card.style.setProperty("--d", pos.d);
    const img = document.createElement("img");
    img.src = src; img.alt = "Anımız";
    card.appendChild(img);
    floaters.appendChild(card);
  });

  // Random hero quote
  document.getElementById("heroQuote").textContent = pick(allQuotes);
}

// ── MESSAGES ──
function buildMessages() {
  const grid = document.getElementById("messagesGrid");
  messages.forEach((m) => {
    const card = document.createElement("article");
    card.className = "msg-card reveal";
    card.innerHTML = `
      <span class="msg-icon">${m.icon}</span>
      <h3>${m.title}</h3>
      <p>${m.text}</p>
    `;
    grid.appendChild(card);
  });
}

// ── PROMISE ──
function buildPromise() {
  const list = document.getElementById("promiseList");
  promiseNotes.forEach((note) => {
    const item = document.createElement("div");
    item.className = "promise-item reveal";
    item.innerHTML = `
      <span class="pi-icon">${note.icon}</span>
      <div>
        <h4>${note.title}</h4>
        <p>${note.text}</p>
      </div>
    `;
    list.appendChild(item);
  });
}

// ── GALLERY ──
function buildGallery() {
  const shuffled = shuffle(images);

  // Polaroid row
  const row = document.getElementById("polaroidRow");
  const rots = [-5, 3, -3, 6, -4, 2, -6, 4];
  shuffled.slice(0, 8).forEach((src, i) => {
    const card = document.createElement("div");
    card.className = "pol-card";
    card.style.setProperty("--r", rots[i % rots.length] + "deg");
    const img = document.createElement("img");
    img.src = src; img.alt = "Anımız"; img.loading = "lazy";
    const cap = document.createElement("p");
    cap.className = "pol-caption";
    cap.textContent = captions[i % captions.length];
    card.appendChild(img);
    card.appendChild(cap);
    row.appendChild(card);
  });

  // Masonry gallery
  const masonry = document.getElementById("galleryMasonry");
  shuffled.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gal-item reveal";
    const img = document.createElement("img");
    img.src = src; img.alt = `Galeri fotoğrafı ${i + 1}`; img.loading = "lazy";
    item.appendChild(img);
    item.addEventListener("click", () => openLightbox(src));
    masonry.appendChild(item);
  });
}

// ── LIGHTBOX ──
function createLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.innerHTML = `
    <img id="lightboxImg" src="" alt="Büyük fotoğraf" />
    <button class="lightbox-close" id="lightboxClose">✕</button>
  `;
  document.body.appendChild(lb);
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.id === "lightboxClose") closeLightbox();
  });
}

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  lb.classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// ── DAILY QUOTE ──
let quoteIndex = 0;
const shuffledQuotes = shuffle(allQuotes);

function buildDailyQuote() {
  const el = document.getElementById("dailyQuote");
  el.textContent = shuffledQuotes[quoteIndex];
  const btn = document.getElementById("dailyBtn");
  btn.addEventListener("click", () => {
    el.classList.add("fade");
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % shuffledQuotes.length;
      el.textContent = shuffledQuotes[quoteIndex];
      el.classList.remove("fade");
    }, 400);
  });
}

// ── RIBBON QUOTES ──
function buildRibbonQuotes() {
  const container = document.getElementById("ribbonQuotes");
  shuffle(ribbonQuotes).slice(0, 3).forEach((q) => {
    const card = document.createElement("div");
    card.className = "rq-card reveal";
    card.textContent = q;
    container.appendChild(card);
  });
}

// ── COUNTER ──
function getCalendarParts(start, end) {
  let y = end.getFullYear() - start.getFullYear();
  let mo = end.getMonth() - start.getMonth();
  let d = end.getDate() - start.getDate();
  if (d < 0) {
    const prev = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    d += prev; mo--;
  }
  if (mo < 0) { mo += 12; y--; }
  return { y, mo, d };
}

const prevVals = {};
function animateBump(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.closest(".cg-item")?.classList.add("bump");
  setTimeout(() => el.closest(".cg-item")?.classList.remove("bump"), 200);
}

function updateCounter() {
  const start = new Date(RELATIONSHIP_START);
  const now = new Date();
  const diff = Math.max(0, now - start);
  const totalSec = Math.floor(diff / 1000);
  const totalMin = Math.floor(totalSec / 60);
  const totalHr = Math.floor(totalMin / 60);
  const totalD = Math.floor(totalHr / 24);
  const { y, mo, d } = getCalendarParts(start, now);
  const remHr = totalHr % 24;
  const remMin = totalMin % 60;
  const remSec = totalSec % 60;

  // Badge
  const badge = document.getElementById("badgeDays");
  if (badge) badge.textContent = totalD.toLocaleString("tr-TR");

  // Counter grid — bump on change
  const vals = { yearsValue: y, monthsValue: mo, daysValue: d, hoursValue: remHr, minutesValue: remMin, secondsValue: remSec };
  Object.entries(vals).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el && prevVals[id] !== val) {
      el.textContent = val;
      if (prevVals[id] !== undefined) animateBump(id);
      prevVals[id] = val;
    }
  });

  document.getElementById("totalDays").textContent = totalD.toLocaleString("tr-TR");
  document.getElementById("totalHours").textContent = totalHr.toLocaleString("tr-TR");
  document.getElementById("totalMinutes").textContent = totalMin.toLocaleString("tr-TR");
  document.getElementById("totalSeconds").textContent = totalSec.toLocaleString("tr-TR");

  document.getElementById("fullDuration").textContent =
    `${y} yıl, ${mo} ay, ${d} gün — ${remHr} saat, ${remMin} dakika ve ${remSec} saniyedir aynı hikayenin içindesiniz. 💕`;
}

// ── SCROLL REVEAL ──
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── INIT ──
createPetals();
buildIntro();
setupIntro();
buildHero();
buildMessages();
buildPromise();
buildGallery();
buildDailyQuote();
buildRibbonQuotes();
createLightbox();
updateCounter();
setInterval(updateCounter, 1000);

// Scroll reveal after DOM is populated
requestAnimationFrame(() => setupScrollReveal());
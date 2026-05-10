// Gerekirse sadece bu tarihi değiştirmen yeterli.
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

const welcomeQuotes = [
  "Sen geldin, kalbim kendine ait en güzel evi buldu.",
  "İyi ki 21 Mart sadece bir tarih değil, bizim başlangıcımız oldu.",
  "Bazı insanlar huzur gibi gelir; sen bana öyle geldin.",
  "Her yeni gün, seni biraz daha çok sevdiğimi fark ediyorum.",
  "Seninle sıradan bir an bile, en güzel hatıraya dönüşüyor.",
  "Kalbimin en sevdiği hikaye, senin adınla başlıyor.",
];

const messages = [
  {
    title: "Hayatıma Işık Gibi Dokundun",
    text:
      "Seninle birlikte günler sadece geçmiyor, güzelleşiyor. Varlığın her şeyi daha yumuşak, daha anlamlı ve daha umut dolu yapıyor.",
  },
  {
    title: "Yanımda Olduğun İçin",
    text:
      "Bazen sadece sesini duymak bile bütün yorgunluğumu alıyor. Çünkü sen, kalbimin dinlenebildiği en güzel yer gibisin.",
  },
  {
    title: "Seninle Biz Olmak",
    text:
      "Seninle kurduğumuz bu bağ, benim için sadece bir ilişki değil; güven, şefkat, dostluk ve büyük bir aşkın aynı yerde buluşması.",
  },
  {
    title: "İyi ki Sen",
    text:
      "Hayatımda olduğun için o kadar mutluyum ki... Bazen bunu kelimelerle anlatmak zor geliyor, ama içim her zaman aynı şeyi söylüyor: İyi ki sen.",
  },
  {
    title: "Gülüşün",
    text:
      "Gülüşünü her gördüğümde dünyadaki bütün telaş bir anlığına duruyor sanki. O an sadece sen, ben ve huzur kalıyor.",
  },
  {
    title: "Sonsuz Dileğim",
    text:
      "Dilerim birlikte daha çok anı biriktirelim, daha çok sarılalım, daha çok gülelim ve bu güzel hikayeyi el ele daha da büyütelim.",
  },
  {
    title: "Kalbimin En Güzel Tesadüfü",
    text:
      "Seninle karşılaşmış olmak, hayatın bana yaptığı en zarif sürpriz gibi. İyi ki yollarımız aynı duyguda buluşmuş.",
  },
  {
    title: "Huzurun Adı",
    text:
      "Bazen mutluluk yüksek sesle gelmez; sessizce kalbine oturur. Sen benim içimde tam da öyle bir yer oldun.",
  },
];

const captions = [
  "Bir anı, bin gülümseme.",
  "Kalbimin en sevdiği kare.",
  "Bize en çok yakışan şey: beraberlik.",
  "Zamana bırakılmayacak kadar güzel bir an.",
  "İçim ısınsın diye baktığım fotoğraflardan biri.",
  "Yüzümdeki gülümsemenin sebebi sensin.",
];

const promiseNotes = [
  {
    title: "Seni Sevmek",
    text: "Seni sevmek benim için bir his değil sadece; her güne daha umutla bakma sebebim.",
  },
  {
    title: "Yanında Olmak",
    text: "Dünyanın neresinde olursam olayım, kalbimin en sakin yeri hep senin yanın gibi geliyor.",
  },
  {
    title: "Bizim Hikayemiz",
    text: "Bu ilişkiyi özel yapan şey sadece aşk değil; içindeki emek, samimiyet ve birbirimize iyi gelen o güzel bağ.",
  },
];

const ribbonQuotes = [
  "Seninle her mevsim biraz daha içime bahar oluyor.",
  "Kalbim, adını en çok huzurla birlikte anıyor.",
  "Birlikte olduğumuz her an, dünyayı daha güzel bir yer gibi hissettiriyor.",
  "Senin gülüşün, günün en sevdiğim anı olmaya hep devam ediyor.",
  "Aşk bazen bir cümle değil, bir insanın varlığıdır. Benim için o sensin.",
  "İyi ki kalbim seni tanımış, iyi ki biz olmuşuz.",
];

const introOverlay = document.getElementById("introOverlay");
const introStack = document.getElementById("introStack");
const heroImage = document.getElementById("heroImage");
const heroMiniCards = document.getElementById("heroMiniCards");
const welcomeQuote = document.getElementById("welcomeQuote");
const messageGrid = document.getElementById("messageGrid");
const polaroidStrip = document.getElementById("polaroidStrip");
const galleryGrid = document.getElementById("galleryGrid");
const fullDuration = document.getElementById("fullDuration");
const promiseList = document.getElementById("promiseList");
const quoteRibbon = document.getElementById("quoteRibbon");

const loveSong = document.getElementById("loveSong");
const musicToggle = document.getElementById("musicToggle");

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createIntroStack() {
  shuffle(images)
    .slice(0, 5)
    .forEach((src, index) => {
      const photo = document.createElement("img");
      photo.src = src;
      photo.alt = "Açılış anı fotoğrafı";
      photo.className = "stack-photo";
      photo.style.transform = `translate(-50%, -50%) rotate(${index * 8 - 16}deg) translateX(${index * 20 - 40}px)`;
      photo.style.animationDelay = `${index * 0.12}s`;
      introStack.appendChild(photo);
    });
}

function createHeroVisuals() {
  const shuffled = shuffle(images);
  heroImage.src = shuffled[0];

  shuffled.slice(1, 4).forEach((src, index) => {
    const card = document.createElement("div");
    const image = document.createElement("img");

    card.className = "floating-card";
    card.style.top = `${index * 28 + 6}%`;
    card.style[index % 2 === 0 ? "left" : "right"] = `${index % 2 === 0 ? 2 : 1}%`;
    card.style.animationDelay = `${index * 0.35}s`;

    image.src = src;
    image.alt = "Birlikte özel bir an";

    card.appendChild(image);
    heroMiniCards.appendChild(card);
  });
}

function createMessages() {
  messages.forEach((message) => {
    const article = document.createElement("article");
    article.className = "message-card";
    article.innerHTML = `<h3>${message.title}</h3><p>${message.text}</p>`;
    messageGrid.appendChild(article);
  });
}

function createPromiseNotes() {
  promiseNotes.forEach((note) => {
    const article = document.createElement("article");
    article.className = "promise-mini-card";
    article.innerHTML = `<h3>${note.title}</h3><p>${note.text}</p>`;
    promiseList.appendChild(article);
  });
}

function createPolaroids() {
  shuffle(images)
    .slice(0, 4)
    .forEach((src, index) => {
      const article = document.createElement("article");
      article.className = "polaroid";
      article.style.setProperty("--rotation", `${index % 2 === 0 ? -3 : 3 + index}deg`);
      article.innerHTML = `
        <img src="${src}" alt="Polaroid anımız" />
        <p class="gallery-caption">${captions[index % captions.length]}</p>
      `;
      polaroidStrip.appendChild(article);
    });
}

function createGallery() {
  shuffle(images).forEach((src, index) => {
    const article = document.createElement("article");
    article.className = "gallery-card";
    article.innerHTML = `
      <img src="${src}" alt="Galeri fotoğrafı ${index + 1}" loading="lazy" />
    `;
    galleryGrid.appendChild(article);
  });
}

function createQuoteRibbon() {
  shuffle(ribbonQuotes)
    .slice(0, 3)
    .forEach((quote) => {
      const article = document.createElement("article");
      article.className = "quote-chip";
      article.textContent = quote;
      quoteRibbon.appendChild(article);
    });
}

function getCalendarDurationParts(startDate, endDate) {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    days += previousMonth;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days };
}

function updateCounter() {
  const startDate = new Date(RELATIONSHIP_START);
  const now = new Date();

  const diff = now.getTime() - startDate.getTime();

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const calendar = getCalendarDurationParts(startDate, now);
  const remainderHours = totalHours % 24;
  const remainderMinutes = totalMinutes % 60;
  const remainderSeconds = totalSeconds % 60;

  document.getElementById("yearsValue").textContent = calendar.years;
  document.getElementById("monthsValue").textContent = calendar.months;
  document.getElementById("daysValue").textContent = calendar.days;
  document.getElementById("hoursValue").textContent = remainderHours;
  document.getElementById("minutesValue").textContent = remainderMinutes;
  document.getElementById("secondsValue").textContent = remainderSeconds;

  document.getElementById("totalDays").textContent = totalDays.toLocaleString("tr-TR");
  document.getElementById("totalHours").textContent = totalHours.toLocaleString("tr-TR");
  document.getElementById("totalMinutes").textContent = totalMinutes.toLocaleString("tr-TR");
  document.getElementById("totalSeconds").textContent = totalSeconds.toLocaleString("tr-TR");

  fullDuration.textContent =
    `${calendar.years} yıl, ${calendar.months} ay, ${calendar.days} gün ` +
    `${remainderHours} saat, ${remainderMinutes} dakika ve ${remainderSeconds} saniyedir ` +
    `aynı hikayenin içindesiniz.`;
}

async function attemptAutoplay() {
  try {
    loveSong.volume = 0.85;
    await loveSong.play();
    musicToggle.textContent = "Müziği Durdur";
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-pressed", "true");
  } catch (error) {
    musicToggle.textContent = "Müziği Başlat";
  }
}

function setupMusicControls() {
  musicToggle.addEventListener("click", async () => {
    if (loveSong.paused) {
      await attemptAutoplay();
      return;
    }

    loveSong.pause();
    musicToggle.textContent = "Müziği Başlat";
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
  });

  document.addEventListener(
    "click",
    async () => {
      if (loveSong.paused) {
        await attemptAutoplay();
      }
    },
    { once: true }
  );
}

function setupWelcomeText() {
  welcomeQuote.textContent = pickRandom(welcomeQuotes);
}

function dismissIntro() {
  setTimeout(() => {
    introOverlay.classList.add("is-hidden");
  }, 2800);
}

createIntroStack();
createHeroVisuals();
createMessages();
createPromiseNotes();
createPolaroids();
createGallery();
createQuoteRibbon();
setupWelcomeText();
setupMusicControls();
updateCounter();
dismissIntro();
attemptAutoplay();
setInterval(updateCounter, 1000);

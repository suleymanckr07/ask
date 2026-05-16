/* ═══════════════════════════════════════════
   BILGE'YE DAİR — script.js
   ═══════════════════════════════════════════ */

const RELATIONSHIP_START = "2026-03-21T00:00:00+03:00";

const fallbackImages = [
  "images/14B9C03C-0E35-4B92-97BA-5F5F65AF3C15_4_5005_c.jpeg",
  "images/33c9807a-1873-4198-beaf-86bbc9e30661.jpg",
  "images/3E97693F-7CBB-4581-9EDA-9B4269B8C159_4_5005_c.jpeg",
  "images/41981F6F-40EF-4A98-998B-ABC03640B3A5_4_5005_c.jpeg",
  "images/608F20EB-C3F6-4EAB-B774-9ECB51DA8E70_4_5005_c.jpeg",
  "images/7A41B715-F7CD-4282-BBAA-5910A211B9DB_4_5005_c.jpeg",
  "images/AD1B853D-19DF-43EC-B5E2-2C0AE268CCCE_4_5005_c.jpeg",
  "images/AFB47F9C-FF79-4E26-9DCC-AC06B9230890_4_5005_c.jpeg",
  "images/B98D70A8-5FC0-4031-93CC-283EE5BD4A6A_4_5005_c.jpeg",
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

const fallbackVideos = [
  "video/5FCD01E1-9222-423F-BBD3-2D4ACCD9E427.mov",
  "video/AA8899AE-3F2E-4771-A679-760E168489E0.mov",
  "video/IMG_0817.MOV",
  "video/IMG_1256.MOV",
  "video/IMG_1261.MOV",
  "video/IMG_1295.MOV",
  "video/IMG_2048.MOV",
  "video/IMG_2078.mp4",
  "video/gemini_generated_video_9FBD466C.mov",
];

const mediaManifest = window.MEDIA_MANIFEST || {};
const images =
  Array.isArray(mediaManifest.images) && mediaManifest.images.length
    ? mediaManifest.images
    : fallbackImages;
const videos =
  Array.isArray(mediaManifest.videos) && mediaManifest.videos.length
    ? mediaManifest.videos
    : fallbackVideos;

const allQuotes = [
  "Sen geldin ve içimde kocaman, sıcacık bir yer açıldı sevgilim.",
  "21 Mart benim için sadece bir tarih değil, sana kavuştuğum gün oldu.",
  "Senin yanında kalbim hiç yorulmuyor, hep huzur buluyor.",
  "Her gün seni biraz daha çok sevdiğimi fark ediyorum güzelim.",
  "Seninle yaşanan küçücük bir an bile benim için çok kıymetli oluyor.",
  "Kalbimin en sevdiği hikaye hep seninle başlıyor sevgilim.",
  "Seninle her şey daha yumuşak, daha tatlı, daha anlamlı geliyor.",
  "Gülüşün günümün en güzel anı olmaya hep devam ediyor.",
  "Bazen sana bakınca içimden sadece seni çok seviyorum demek geliyor.",
  "İyi ki yollarımız kesişmiş, iyi ki sen benim sevgilim olmuşsun.",
  "Seni sevmek bana çok doğal geliyor, sanki kalbim hep seni beklemiş gibi.",
  "Seninle olduğum her an içim rahatlıyor, dünya biraz daha güzelleşiyor.",
  "Aklıma düştüğünde bile yüzümde istemsiz bir gülümseme oluşuyor.",
  "Seninle geçen zamanın nasıl aktığını anlamıyorum bile sevgilim.",
  "Elini tuttuğumda içimde her şey tamamlanmış gibi oluyor.",
  "Hayat seninle birlikte çok daha güzel bir yere dönüştü.",
  "Adını duyduğum an bile içim ısınıyor güzel sevgilim.",
  "Seninle gülmek bana dünyanın en güzel şeyi gibi geliyor.",
  "Sen benim en sevdiğim insan, en huzurlu yerim, en tatlı alışkanlığımsın.",
  "Gözlerinin içine bakınca bütün gürültü susuyor sanki.",
  "Sen hayatıma geldiğinden beri kalbim daha yumuşak atıyor.",
  "Sana olan sevgim her gün biraz daha büyüyor sevgilim.",
  "İçimdeki en sakin, en güzel yer hep sana çıkıyor.",
  "Seninle kurulacak bir hayatı düşünmek bile beni mutlu etmeye yetiyor.",
];

const messages = [
  { icon: "🌸", title: "Hayatıma Çok Güzel Geldin", text: "Seninle birlikte günler sadece geçmiyor sevgilim, gerçekten güzelleşiyor. İçimdeki en yorgun yeri bile usulca sakinleştiriyorsun." },
  { icon: "💕", title: "Yanımda Olman Yetiyor", text: "Bazen tek ihtiyacım olan şey senin sesin oluyor. Bir cümlen bile bütün günün ağırlığını alıp götürüyor." },
  { icon: "🌹", title: "Seninle Biz Olmak Çok Güzel", text: "Seninle kurduğumuz şey benim için sıradan bir ilişki değil sevgilim. İçinde sevgi var, emek var, güven var, kalpten gelen bir bağ var." },
  { icon: "✨", title: "Sana Sahip Olduğum İçin Çok Mutluyum", text: "Hayatımdasın ya, bazen durup sadece bunun için şükretmek istiyorum. Çünkü sen benim başıma gelen en güzel şeylerden birisin." },
  { icon: "😊", title: "Gülüşüne Ayrı Aşığım", text: "Gülüşünü gördüğüm an içim hafifliyor. Dünyada ne olursa olsun o an her şey biraz daha iyi geliyor." },
  { icon: "🌙", title: "Tek Dileğim", text: "Dilerim hep böyle kalalım sevgilim. Daha çok sarılalım, daha çok gülelim, daha çok anı biriktirelim ve sevgimizi hep koruyalım." },
  { icon: "🎀", title: "İyi Ki Karşıma Çıkmışsın", text: "Bazen seni düşününce içimden sadece şu geçiyor: İyi ki seni tanımışım, iyi ki kalbim seni seçmiş." },
  { icon: "🕊️", title: "İçime En İyi Gelen Sensin", text: "Kalbim sıkıştığında, kafam dolduğunda, gün kötü geçtiğinde bile seni düşünmek bana iyi geliyor." },
  { icon: "💞", title: "Aklıma Düşünce", text: "Ne zaman aklıma gelsen içimde yumuşacık bir his oluyor. Sanki kalbim seni görünce hemen tanıyor gibi." },
  { icon: "☀️", title: "Günümün En Güzel Kısmı", text: "Bazen günün en güzel anı senden gelen minicik bir mesaj oluyor. Çünkü senin varlığın bile yetiyor bana." },
  { icon: "🌷", title: "Senin Yanında Kendim Gibiyim", text: "Yanında rahat olabilmek, anlaşılmak ve gerçekten sevilmek... Benim için aşkın en güzel hali bu sevgilim." },
  { icon: "💫", title: "Seninle Gelecek Güzel", text: "Seninle kurduğum yarınlarda telaş değil huzur görüyorum. Zor günlerde bile el ele kalabileceğimizi hissediyorum." },
];

const promiseNotes = [
  { icon: "💗", title: "Seni Sevmek Çok Güzel", text: "Seni sevmek bana yük değil huzur veriyor sevgilim. Kalbim seni severken kendini doğru yerde hissediyor." },
  { icon: "🤝", title: "Yanında Olmak İstiyorum", text: "Dünyanın neresinde olursam olayım, içimdeki en sakin his hep senin yanına ait gibi geliyor." },
  { icon: "📖", title: "Bizim Hikayemiz Bambaşka", text: "Bizim aramızdaki şeyi özel yapan şey sadece aşk değil; birbirimize iyi gelişimiz, samimiyetimiz ve kalpten bağlı oluşumuz." },
  { icon: "🌺", title: "Sen Bana Ev Gibisin", text: "Bazı insanlar insana sadece iyi gelmez, aynı zamanda ait hissettirir. Sen bana tam olarak öyle hissettiriyorsun." },
  { icon: "🥹", title: "Sana Dair Hissettiğim Şey", text: "Bazen sana olan sevgimi anlatmak istiyorum ama kelimeler yetmiyor. Çünkü hissettiğim şey çok daha derin." },
  { icon: "🫶", title: "Sen Mutluysan Ben de Mutluyum", text: "Gülüşünün yerinde olması, keyfinin iyi olması, huzurlu olman... Bunların hepsi beni içten içe mutlu ediyor sevgilim." },
];

const captions = [
  "Bir anı, bin gülümseme.",
  "Bakıp bakıp içimin ısındığı kare.",
  "Bize en çok sen ve ben birlikteyken yakışıyor.",
  "Zamana bırakılmayacak kadar güzel.",
  "Özleyince açıp baktığım fotoğraflardan biri.",
  "Yüzümdeki gülümsemenin en tatlı sebebi sensin.",
  "Sana bakınca dünya gerçekten daha güzel geliyor.",
  "Seninle olan her kare ayrı güzel sevgilim.",
];

const ribbonQuotes = [
  "Seninle her mevsim biraz daha içime bahar oluyor.",
  "Kalbim senin adını hep sevgiyle ve huzurla anıyor.",
  "Birlikte olduğumuz her an, dünyayı daha güzel hissettiriyor.",
  "Senin gülüşün, günün en sevdiğim anı olmaya devam ediyor.",
  "Aşk bazen bir cümle değil, bir insanın varlığıdır. Benim için o sensin.",
  "İyi ki kalbim seni tanımış, iyi ki biz olmuşuz.",
  "Sen benim en sevdiğim insan, en güzel tesadüfüm ve en içten duam gibisin.",
  "Hayatın en yumuşak, en sevilesi tarafı seninle daha çok hissediliyor.",
];

const phraseCloudItems = [
  "İyi ki benim sevgilim olmuşsun",
  "Gülüşünü gördüğüm an içim açılıyor",
  "Senin yanında kendimi çok huzurlu hissediyorum",
  "Kalbim zaten çoktan sana ait sevgilim",
  "Aklım durup dururken bile sana gidiyor",
  "Sen bana gerçekten çok iyi geliyorsun",
  "Hayatımı fark etmeden güzelleştirdin",
  "İçimdeki bütün sertliği yumuşatıyorsun",
  "Seninle her şey daha anlamlı geliyor",
  "En sevdiğim alışkanlık sen oldun",
  "Sana bakınca hayran hayran kalıyorum",
  "Benim için çok ama çok özelsin sevgilim",
  "Seni düşündükçe yüzümde gülümseme oluşuyor",
  "Gözlerine bakınca içim sıcacık oluyor",
  "Yanımda olman bana fazlasıyla yetiyor",
  "Senin sevgin bana güç veriyor sevgilim",
  "Seninle olmak bana dünyanın en güzel şeyi gibi geliyor",
  "Seninleyken dünya daha yumuşak, daha tatlı geliyor",
  "Sesini duyunca bile içim rahatlıyor",
  "Sarılınca bütün yorgunluğum geçiyor",
  "Sen benim içimi en çok ısıtan insansın",
  "Seninle konuşmak günümün en güzel anı oluyor",
  "Gün içinde en çok seni merak ediyorum",
  "Senin gülmen beni mutlu etmeye yetiyor",
  "Varlığın bile kalbime iyi geliyor",
  "Sana sevgilim demek bile çok güzel hissettiriyor",
  "İçimdeki en güzel hislerin sebebi sensin",
  "Senin yanında zaman daha güzel akıyor",
  "Birlikteyken her şey olması gerektiği gibi geliyor",
  "Seni sevmek kalbime çok yakışıyor",
];

const introLoveNotes = [
  "Seninle başlayan her şey, içimde biraz daha çiçek açıyor.",
  "Bu sayfaya her girişimde sana bir kez daha sarılmak istiyormuş gibi oluyorum.",
  "Bazı insanlar sadece sevilmez sevgilim, insanın kalbine usulca yerleşir. Sen tam öylesin.",
  "Bir fotoğrafına bakmak bile içimi yumuşatmaya yetiyor, çünkü içinde sen varsın.",
  "Seni sevmek bana hayatın en tatlı huzuru gibi geliyor.",
];

const songNotes = [
  "Bu şarkı açılınca seni düşünmeden duramıyorum sevgilim.",
  "Her notasında sana biraz daha yakın hissediyorum kendimi.",
  "Bu şarkı benim için senin adın gibi, içime dokunuyor.",
  "Dinledikçe sana sarılmayı istediğim şarkılardan biri bu.",
];

const timelineEvents = [
  {
    date: "21 Mart 2026",
    title: "Bizim başlangıcımız",
    text: "Benim için sıradan bir gün değildi; çünkü o gün kalbim seni daha başka tanımaya başladı.",
  },
  {
    date: "İlk buluşma",
    title: "Seni daha çok sevdiğim gün",
    text: "Yanında zamanın nasıl geçtiğini anlamadığım o günlerden biri. Eve dönerken bile içimde sen vardın.",
  },
  {
    date: "İlk uzun sarılma",
    title: "İçimin durulduğu an",
    text: "Bazı sarılmalar vardır, insan kendini ait hissettirir. Senin sarılman bana hep öyle geliyor.",
  },
  {
    date: "İlk birlikte fotoğraf",
    title: "Dönüp dönüp baktığım kare",
    text: "O fotoğraf sadece bir kare değil, birlikte olduğumuzun içimde bıraktığı tatlı bir his gibi.",
  },
];

const loveReasons = [
  "Yanında kendim gibi olabildiğim için.",
  "Gülüşün içimi hafiflettiği için.",
  "Sesin bana iyi geldiği için.",
  "Beni gerçekten anladığını hissettirdiğin için.",
  "Baktığında içimin ısındığını hissettirdiğin için.",
  "Benimle ilgilenişin çok içten olduğu için.",
  "Küçük şeyleri bile güzel hale getirdiğin için.",
  "Sevgini bana hissettirmeyi bildiğin için.",
  "Birlikteyken kalbim hiç yorulmadığı için.",
  "Seninle her şey daha gerçek ve daha yumuşak geldiği için.",
  "Beni mutlu etmeye çalışırken bile ne kadar tatlı olduğun için.",
  "Sadece varlığın bile bana huzur verdiği için.",
];

const letterParagraphs = [
  "Sevgilim, bazen sana bakınca içimden geçen şeyleri tam olarak nasıl anlatacağımı bilemiyorum. Çünkü sana olan sevgim öyle iki üç cümleyle geçecek gibi değil. Sen hayatımda olduğundan beri kalbimin içinde hep tatlı bir sıcaklık var. Sanki seni sevince her şey biraz daha yerli yerine oturmuş gibi hissediyorum.",
  "Senin yanında kendimi rahat, güvende ve gerçekten sevilmiş hissediyorum. Günüm nasıl geçmiş olursa olsun, senin sesin, gülüşün ya da aklıma düşmen bile içimi usulca sakinleştiriyor. Bunu bana hissettirebilmen o kadar kıymetli ki sevgilim. Belki her zaman en doğru kelimeleri bulamıyorum ama içimdeki şey çok net: Ben seni çok seviyorum.",
  "Seninle daha çok anı biriktirmek, daha çok sarılmak, daha çok gülmek istiyorum. Sadece güzel günlerde değil, her günün içinde seninle olmaya gönlüm çok razı. İyi ki benim sevgilimsin, iyi ki kalbim seni bu kadar sevmiş. Ne olursa olsun sana baktığımda hep aynı şeyi hissediyorum: Sen benim için gerçekten çok özelsin.",
];

const comfortNotes = [
  "Kötü geçen bir günün sonunda seni düşünmek bile beni rahatlatıyor.",
  "Sesini duyunca içimdeki gerginlik azalıyor sevgilim.",
  "Yanımda olduğunda her şey biraz daha kolay geliyor.",
  "Seninle konuşunca kalbim daha sakin atıyor.",
  "Bana sevildiğimi hissettirişin çok iyi geliyor.",
  "Senin varlığın bana güç değil sadece, huzur da veriyor.",
];

const memoryWallNotes = [
  "Burada sana bir kez daha hayran kalmıştım.",
  "Bu anın içindeki mutluluk hâlâ yüzümde.",
  "Özleyince dönüp baktığım anlardan biri.",
  "Burada sadece fotoğraf yok, kalbimde kalan bir his var.",
  "Birlikteyken zamanın ne kadar güzel aktığını hatırlatan an.",
  "Sana sarılmak istememe sebep olan karelerden biri.",
  "Bu fotoğrafta bile sana olan sevgim hissediliyor gibi geliyor.",
  "İçimi usulca ısıtan anılardan biri bu.",
];

const videoLines = [
  "Bazı anılar hareket edince daha da güzel oluyor, çünkü içindeki sen daha çok hissediliyor.",
  "Seni izlemek bile bazen bütün günümü güzelleştirmeye yetiyor sevgilim.",
  "Bu videolarda sadece bir an yok, sana bakarken hissettiğim o güzel şey de var.",
  "Birlikte güldüğümüz saniyeler, tekrar tekrar dönüp izlemek isteyeceğim anlara dönüşüyor.",
];

const introPhoto = document.getElementById("introPhoto");
const introBackdrop = document.getElementById("introBackdrop");
const introLoveNote = document.getElementById("introLoveNote");
const heroImg = document.getElementById("heroImg");
const promiseImg = document.getElementById("promiseImg");
const heroQuote = document.getElementById("heroQuote");
const heroFloaters = document.getElementById("heroFloaters");
const messagesGrid = document.getElementById("messagesGrid");
const promiseList = document.getElementById("promiseList");
const polaroidRow = document.getElementById("polaroidRow");
const galleryMasonry = document.getElementById("galleryMasonry");
const timelineList = document.getElementById("timelineList");
const reasonsGrid = document.getElementById("reasonsGrid");
const letterBody = document.getElementById("letterBody");
const letterToggle = document.getElementById("letterToggle");
const comfortGrid = document.getElementById("comfortGrid");
const memoryWall = document.getElementById("memoryWall");
const ribbonQuotesContainer = document.getElementById("ribbonQuotes");
const phraseCloud = document.getElementById("phraseCloud");
const videoGrid = document.getElementById("videoGrid");
const featuredVideo = document.getElementById("featuredVideo");
const videoSection = document.getElementById("videos");
const songNote = document.getElementById("songNote");
const fullDuration = document.getElementById("fullDuration");

const loveSong = document.getElementById("loveSong");
const cursorGlow = document.getElementById("cursorGlow");

const prevVals = {};
const heroFloaterImages = [];
let musicStarted = false;
let musicScrollBindings = [];
let quoteIndex = 0;
const shuffledQuotes = shuffle(allQuotes);

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uniqueSample(arr, count) {
  return shuffle(arr).slice(0, Math.min(count, arr.length));
}

function pickDifferent(arr, exclude = []) {
  const filtered = arr.filter((item) => !exclude.includes(item));
  return pick(filtered.length ? filtered : arr);
}

function nextDelay(min = 5000, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bindImageRecovery(image) {
  if (!image || image.dataset.recoveryBound === "true") return;

  image.dataset.recoveryBound = "true";
  image.addEventListener("error", () => {
    const nextSrc = pickDifferent(images, [image.currentSrc, image.getAttribute("src")].filter(Boolean));
    if (!nextSrc || image.dataset.recoveryTried === nextSrc) {
      image.closest(".gal-item, .pol-card, .hero-float, .intro-spotlight__photo")?.remove();
      return;
    }

    image.dataset.recoveryTried = nextSrc;
    image.src = nextSrc;
  });
}

function swapVisualSource(el, src, instant = false) {
  if (!el || !src) return;

  bindImageRecovery(el);

  if (instant || !el.getAttribute("src")) {
    el.src = src;
    return;
  }

  el.classList.add("is-swapping");

  window.setTimeout(() => {
    el.src = src;
  }, 180);

  const cleanup = () => {
    el.classList.remove("is-swapping");
    el.removeEventListener("load", cleanup);
    el.removeEventListener("error", cleanup);
  };

  el.addEventListener("load", cleanup);
  el.addEventListener("error", cleanup);
}

function cycleText(el, text) {
  if (!el) return;
  el.classList.add("is-fading");
  window.setTimeout(() => {
    el.textContent = text;
    el.classList.remove("is-fading");
  }, 180);
}

if (cursorGlow) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

function createSparkleBurst(event) {
  const container = document.getElementById("sparkleContainer");
  if (!container) return;

  for (let index = 0; index < 8; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent = index % 2 === 0 ? "✨" : "💕";
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    sparkle.style.setProperty("--dx", `${(Math.random() - 0.5) * 120}px`);
    sparkle.style.setProperty("--dy", `${-30 - Math.random() * 90}px`);
    sparkle.style.animationDelay = `${index * 0.02}s`;
    container.appendChild(sparkle);
    window.setTimeout(() => sparkle.remove(), 1300);
  }
}

document.addEventListener("click", (event) => {
  if (window.innerWidth > 640) {
    createSparkleBurst(event);
  }
});

function createPetals() {
  const container = document.getElementById("petalsContainer");
  const petalChars = ["🌸", "🌺", "💮", "🌼", "💕"];

  for (let index = 0; index < 20; index += 1) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = pick(petalChars);
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${7 + Math.random() * 9}s`;
    petal.style.animationDelay = `${Math.random() * 12}s`;
    petal.style.fontSize = `${0.75 + Math.random() * 0.9}rem`;
    container.appendChild(petal);
  }
}

function buildSongSection() {
  if (songNote) {
    songNote.textContent = pick(songNotes);
  }
}

function buildIntro() {
  if (!introPhoto || !introBackdrop || !introLoveNote) return;

  const selected = pick(images);
  swapVisualSource(introPhoto, selected, true);
  introBackdrop.style.backgroundImage = `url("${selected}")`;
  introLoveNote.textContent = pick(introLoveNotes);
}

function setupIntro() {
  const overlay = document.getElementById("introOverlay");
  const enterBtn = document.getElementById("introEnter");

  if (!overlay || !enterBtn) return;

  const closeIntro = () => {
    overlay.classList.add("hidden");
  };

  enterBtn.addEventListener("click", closeIntro);

  window.setTimeout(() => {
    if (!overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    }
  }, 5600);
}

function setupScrollMusic() {
  if (!loveSong) return;

  const startOnScroll = () => {
    if (!musicStarted) {
      tryPlayMusic();
    }
  };

  musicScrollBindings = [
    ["scroll", startOnScroll, { passive: true }],
    ["wheel", startOnScroll, { passive: true }],
    ["touchmove", startOnScroll, { passive: true }],
  ];

  musicScrollBindings.forEach(([eventName, handler, options]) => {
    window.addEventListener(eventName, handler, options);
  });
}

function setMusicPlaying(playing) {
  if (!loveSong) return;
  loveSong.dataset.playing = playing ? "true" : "false";
}

function cleanupScrollMusicBindings() {
  if (!musicScrollBindings.length) return;

  musicScrollBindings.forEach(([eventName, handler, options]) => {
    window.removeEventListener(eventName, handler, options);
  });

  musicScrollBindings = [];
}

async function tryPlayMusic() {
  if (musicStarted || !loveSong) return;

  try {
    loveSong.volume = 0.8;
    await loveSong.play();
    musicStarted = true;
    setMusicPlaying(true);
    cleanupScrollMusicBindings();
  } catch (error) {
    setMusicPlaying(false);
  }
}

function createHeroFloaters() {
  heroFloaters.innerHTML = "";
  heroFloaterImages.length = 0;

  const positions = [
    { top: "8%", left: "-15%", r: "-6deg", d: "0s" },
    { top: "55%", right: "-12%", r: "5deg", d: "0.5s" },
    { top: "78%", left: "-10%", r: "3deg", d: "1s" },
  ];

  positions.forEach((position) => {
    const card = document.createElement("div");
    const image = document.createElement("img");

    card.className = "hero-float";
    card.style.top = position.top;
    if (position.left) card.style.left = position.left;
    if (position.right) card.style.right = position.right;
    card.style.setProperty("--r", position.r);
    card.style.setProperty("--d", position.d);

    image.alt = "Anımız";
    image.className = "image-switch";

    card.appendChild(image);
    heroFloaters.appendChild(card);
    heroFloaterImages.push(image);
  });
}

function refreshHeroVisuals(instant = false) {
  const selected = uniqueSample(images, 5);

  swapVisualSource(heroImg, selected[0], instant);
  swapVisualSource(promiseImg, selected[1] || selected[0], instant);

  heroFloaterImages.forEach((image, index) => {
    swapVisualSource(image, selected[index + 2] || selected[0], instant);
  });

  if (instant) {
    heroQuote.textContent = pick(allQuotes);
  } else {
    cycleText(heroQuote, pick(allQuotes));
  }
}

function startHeroRotation() {
  const rotate = () => {
    refreshHeroVisuals();
    window.setTimeout(rotate, nextDelay());
  };

  window.setTimeout(rotate, nextDelay());
}

function buildHero() {
  createHeroFloaters();
  refreshHeroVisuals(true);
  startHeroRotation();
}

function buildMessages() {
  messagesGrid.innerHTML = "";

  messages.forEach((message) => {
    const card = document.createElement("article");
    card.className = "msg-card reveal";
    card.innerHTML = `
      <span class="msg-icon">${message.icon}</span>
      <h3>${message.title}</h3>
      <p>${message.text}</p>
    `;
    messagesGrid.appendChild(card);
  });
}

function buildTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = "";
  timelineEvents.forEach((event) => {
    const article = document.createElement("article");
    article.className = "timeline-card reveal";
    article.innerHTML = `
      <p class="timeline-date">${event.date}</p>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
    `;
    timelineList.appendChild(article);
  });
}

function buildPhraseCloud() {
  if (!phraseCloud) return;

  phraseCloud.innerHTML = "";

  shuffle(phraseCloudItems).forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "phrase-chip";
    chip.textContent = item;
    phraseCloud.appendChild(chip);
  });
}

function buildPromise() {
  promiseList.innerHTML = "";

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
    promiseList.appendChild(item);
  });
}

function buildReasons() {
  if (!reasonsGrid) return;

  reasonsGrid.innerHTML = "";
  loveReasons.forEach((reason, index) => {
    const card = document.createElement("article");
    card.className = "reason-card reveal";
    card.innerHTML = `
      <span class="reason-index">${String(index + 1).padStart(2, "0")}</span>
      <p>${reason}</p>
    `;
    reasonsGrid.appendChild(card);
  });
}

function buildLetter() {
  if (!letterBody || !letterToggle) return;

  letterBody.innerHTML = "";
  letterParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    letterBody.appendChild(p);
  });

  letterToggle.addEventListener("click", () => {
    const isOpen = letterBody.classList.toggle("is-open");
    letterToggle.textContent = isOpen ? "Mektubu kapat" : "Mektubu aç";
    letterToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

function buildComfort() {
  if (!comfortGrid) return;

  comfortGrid.innerHTML = "";
  comfortNotes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "comfort-card reveal";
    card.innerHTML = `<p>${note}</p>`;
    comfortGrid.appendChild(card);
  });
}

function buildGallery() {
  const shuffled = shuffle(images);

  polaroidRow.innerHTML = "";
  galleryMasonry.innerHTML = "";

  const rotations = [-5, 3, -3, 6, -4, 2, -6, 4, -2, 5];
  shuffled.slice(0, 10).forEach((src, index) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const caption = document.createElement("p");

    card.className = "pol-card";
    card.style.setProperty("--r", `${rotations[index % rotations.length]}deg`);

    image.src = src;
    image.alt = "Anımız";
    image.loading = "lazy";
    bindImageRecovery(image);

    caption.className = "pol-caption";
    caption.textContent = captions[index % captions.length];

    card.appendChild(image);
    card.appendChild(caption);
    polaroidRow.appendChild(card);
  });

  shuffled.forEach((src, index) => {
    const item = document.createElement("div");
    const image = document.createElement("img");

    item.className = "gal-item reveal";
    image.src = src;
    image.alt = `Galeri fotoğrafı ${index + 1}`;
    image.loading = "lazy";
    bindImageRecovery(image);

    item.appendChild(image);
    item.addEventListener("click", () => openLightbox(src));
    galleryMasonry.appendChild(item);
  });
}

function buildMemoryWall() {
  if (!memoryWall) return;

  memoryWall.innerHTML = "";
  uniqueSample(images, 6).forEach((src, index) => {
    const card = document.createElement("article");
    card.className = "memory-card reveal";
    card.innerHTML = `
      <img src="${src}" alt="Anı duvarı fotoğrafı ${index + 1}" loading="lazy" />
      <p>${memoryWallNotes[index % memoryWallNotes.length]}</p>
    `;
    const img = card.querySelector("img");
    bindImageRecovery(img);
    card.addEventListener("click", () => openLightbox(src));
    memoryWall.appendChild(card);
  });
}

function createLightbox() {
  const existing = document.getElementById("lightbox");
  if (existing) existing.remove();

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <img id="lightboxImg" src="" alt="Büyük fotoğraf" />
    <button class="lightbox-close" id="lightboxClose">✕</button>
  `;

  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.id === "lightboxClose") {
      closeLightbox();
    }
  });
}

function createVideoLightbox() {
  const existing = document.getElementById("videoLightbox");
  if (existing) existing.remove();

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox video-lightbox";
  lightbox.id = "videoLightbox";
  lightbox.innerHTML = `
    <video id="lightboxVideo" controls autoplay playsinline></video>
    <button class="lightbox-close" id="videoLightboxClose">✕</button>
  `;

  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.id === "videoLightboxClose") {
      closeVideoLightbox();
    }
  });
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImg");

  if (!lightbox || !image) return;

  image.src = src;
  lightbox.classList.add("open");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("open");
}

function openVideoLightbox(src) {
  const lightbox = document.getElementById("videoLightbox");
  const video = document.getElementById("lightboxVideo");

  if (!lightbox || !video) return;

  video.src = src;
  video.load();
  lightbox.classList.add("open");
  video.play().catch(() => {});
}

function closeVideoLightbox() {
  const lightbox = document.getElementById("videoLightbox");
  const video = document.getElementById("lightboxVideo");

  if (!lightbox || !video) return;

  video.pause();
  lightbox.classList.remove("open");
  video.removeAttribute("src");
  video.load();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeVideoLightbox();
  }
});

function buildDailyQuote() {
  const el = document.getElementById("dailyQuote");
  const btn = document.getElementById("dailyBtn");

  if (!el || !btn) return;

  el.textContent = shuffledQuotes[quoteIndex];

  btn.addEventListener("click", () => {
    el.classList.add("fade");
    window.setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % shuffledQuotes.length;
      el.textContent = shuffledQuotes[quoteIndex];
      el.classList.remove("fade");
    }, 400);
  });
}

function buildRibbonQuotes() {
  ribbonQuotesContainer.innerHTML = "";

  shuffle(ribbonQuotes)
    .slice(0, 3)
    .forEach((quote) => {
      const card = document.createElement("div");
      card.className = "rq-card reveal";
      card.textContent = quote;
      ribbonQuotesContainer.appendChild(card);
    });
}

function setFeaturedVideo(src, index) {
  if (!featuredVideo || !src) return;

  featuredVideo.src = src;
  featuredVideo.dataset.activeVideo = src;
  featuredVideo.load();
  featuredVideo.play().catch(() => {});

  document.querySelectorAll(".video-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.videoSrc === src);
  });
}

function buildVideos() {
  if (!videoSection) return;

  if (!videos.length) {
    videoSection.style.display = "none";
    return;
  }

  videoSection.style.display = "";
  videoGrid.innerHTML = "";

  videos.forEach((src, index) => {
    const card = document.createElement("button");
    const video = document.createElement("video");

    card.type = "button";
    card.className = "video-card reveal";
    card.dataset.videoSrc = src;

    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";

    card.appendChild(video);
    card.addEventListener("mouseenter", () => video.play().catch(() => {}));
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
    card.addEventListener("click", () => {
      setFeaturedVideo(src, index);
      openVideoLightbox(src);
    });

    videoGrid.appendChild(card);
  });

  setFeaturedVideo(videos[0], 0);
  featuredVideo.addEventListener("click", () => openVideoLightbox(featuredVideo.dataset.activeVideo || videos[0]));
}

function getCalendarParts(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    const previousMonthDayCount = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += previousMonthDayCount;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days };
}

function animateBump(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const card = el.closest(".cg-item");
  card?.classList.add("bump");
  window.setTimeout(() => card?.classList.remove("bump"), 200);
}

function updateCounter() {
  const start = new Date(RELATIONSHIP_START);
  const now = new Date();
  const diff = Math.max(0, now - start);
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const { years, months, days } = getCalendarParts(start, now);
  const remainderHours = totalHours % 24;
  const remainderMinutes = totalMinutes % 60;
  const remainderSeconds = totalSeconds % 60;

  const badge = document.getElementById("badgeDays");
  if (badge) badge.textContent = totalDays.toLocaleString("tr-TR");

  const values = {
    yearsValue: years,
    monthsValue: months,
    daysValue: days,
    hoursValue: remainderHours,
    minutesValue: remainderMinutes,
    secondsValue: remainderSeconds,
  };

  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (prevVals[id] !== value) {
      el.textContent = value;
      if (prevVals[id] !== undefined) animateBump(id);
      prevVals[id] = value;
    }
  });

  document.getElementById("totalDays").textContent = totalDays.toLocaleString("tr-TR");
  document.getElementById("totalHours").textContent = totalHours.toLocaleString("tr-TR");
  document.getElementById("totalMinutes").textContent = totalMinutes.toLocaleString("tr-TR");
  document.getElementById("totalSeconds").textContent = totalSeconds.toLocaleString("tr-TR");

  if (fullDuration) {
    fullDuration.textContent =
      `${years} yıl, ${months} ay, ${days} gün — ${remainderHours} saat, ` +
      `${remainderMinutes} dakika ve ${remainderSeconds} saniyedir aynı kalbin içinde büyüyen ` +
      `çok güzel bir hikayesiniz. 💕`;
  }
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

createPetals();
buildSongSection();
buildIntro();
setupIntro();
setupScrollMusic();
buildHero();
buildTimeline();
buildMessages();
buildPhraseCloud();
buildReasons();
buildLetter();
buildPromise();
buildComfort();
buildGallery();
buildMemoryWall();
buildVideos();
buildDailyQuote();
buildRibbonQuotes();
createLightbox();
createVideoLightbox();
updateCounter();
window.setInterval(updateCounter, 1000);
window.requestAnimationFrame(() => setupScrollReveal());

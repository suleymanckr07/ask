const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const manifestPath = path.join(rootDir, "media-manifest.js");

const scanDir = (folderName, extensions) => {
  const folderPath = path.join(rootDir, folderName);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => extensions.includes(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, "tr"))
    .map((fileName) => `${folderName}/${fileName}`);
};

const manifest = {
  generatedAt: new Date().toISOString(),
  images: scanDir("images", [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]),
  videos: scanDir("video", [".mp4", ".mov", ".webm", ".m4v"]),
};

const output = `window.MEDIA_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`;

fs.writeFileSync(manifestPath, output, "utf8");

console.log(
  `media-manifest.js updated: ${manifest.images.length} images, ${manifest.videos.length} videos`
);

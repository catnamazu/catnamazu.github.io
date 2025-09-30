// generate_sitemap.js
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://catnamazu.github.io/"; // あなたのサイトのルートURL
const ROOT_DIR = "./"; // リポジトリのルート（index.html がある場所）
const TARGET_EXT = ".html";

let urls = [];

// ディレクトリを再帰的に走査して .html ファイルを探す
function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (stat.isFile() && file.endsWith(TARGET_EXT)) {
      let relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, "/");
      urls.push(BASE_URL + relPath);
    }
  });
}

walk(ROOT_DIR);

// sitemap.xml を生成
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach((url) => {
  sitemap += `  <url>\n    <loc>${url}</loc>\n  </url>\n`;
});

sitemap += `</urlset>\n`;

// ファイルに書き出す
fs.writeFileSync("sitemap.xml", sitemap, "utf-8");
console.log("✅ sitemap.xml を生成しました！");

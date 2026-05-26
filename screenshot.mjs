// Screenshot tool — captures a URL and saves to ./temporary screenshots/
// Usage: node screenshot.mjs http://localhost:3000
// Usage with label: node screenshot.mjs http://localhost:3000 my-label
// Requires: npm install puppeteer

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";

const outDir = "./temporary screenshots";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Auto-increment screenshot number
const existing = fs.readdirSync(outDir).filter((f) => f.endsWith(".png"));
const numbers = existing.map((f) => parseInt(f.match(/^screenshot-(\d+)/)?.[1] || "0"));
const next = numbers.length ? Math.max(...numbers) + 1 : 1;

const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const outPath = path.join(outDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2" });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);

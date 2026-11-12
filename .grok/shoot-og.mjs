import { chromium } from "playwright";

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto("file:///workspace/.grok/og-card.html", { waitUntil: "load" });
const faces = await page.evaluate(async () => {
  await document.fonts.ready;
  return [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`);
});
console.log(faces.join("\n"));
await page.screenshot({ path: "/workspace/.grok/og-card-raw.png", type: "png" });
await browser.close();

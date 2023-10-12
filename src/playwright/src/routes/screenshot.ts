import { Request, Response } from "express";
import { chromium } from "playwright";

const PAGE_WAIT_TIME = parseInt(process.env.PAGE_WAIT_TIME || "2000");
const PAGE_WIDTH = parseInt(process.env.PAGE_WIDTH || "1280");
const PAGE_HEIGHT = parseInt(process.env.PAGE_HEIGHT || "800");

export const screenshot = async (req: Request, res: Response) => {
  const urlParam = req.query.url as string; // URLパラメータを取得

  if (!urlParam) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  // コンソールにメッセージを送信
  console.log(`Processing screenshot for URL: ${urlParam}`);

  // Playwrightを使用してスクリーンショットを取得
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: PAGE_WIDTH, height: PAGE_HEIGHT });
  await page.goto(urlParam);
  await page.waitForTimeout(PAGE_WAIT_TIME);

  const screenshot = await page.screenshot();
  // スクリーンショットをHTTPレスポンスとして送信
  // res.setHeader("Content-Type", "image/png");
  // res.send(screenshot);

  // Base64エンコードされたスクリーンショットをHTTPレスポンスとして送信
  const base64Screenshot = screenshot.toString("base64");
  res.json({ screenshot: base64Screenshot });

  await browser.close();
  console.log("Screenshot taken");
};

const axios = require("axios");
import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function thumbnail(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  const Hosting = process.env["PlaywrightServer"];

  const url =
    request.query.get("url") ||
    (await request.text()) ||
    "https://haramizu.com";

  const externalApiUrl = Hosting + "/api/screenshot?url=" + url;

  // 外部APIからデータを取得
  const response = await axios.get(externalApiUrl);
  // 必要なデータを抽出
  const imageData = response.data.screenshot; // 仮のプロパティ名です

  // Base64エンコードされた画像データをHTTPレスポンスとして返す
  return {
    status: 200,
    headers: {
      "Content-Type": "image/png", // 画像のMIMEタイプに合わせて設定
    },
    body: Buffer.from(imageData, "base64"),
  };
}

app.http("thumbnail", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: thumbnail,
});

import express from "express";
import { hello } from "./routes/hello";
import { screenshot } from "./routes/screenshot";

const app = express();
const port = process.env.PORT || 3000

// APIエンドポイント1
app.get("/api/hello", hello);

// APIエンドポイント2
app.get("/api/screenshot", screenshot);

// ルートパス('/')にアクセスした場合のハンドラー
app.get("/", (req, res) => {
  res.send("Welcome to the Sitecore Search Utility");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

// CORSミドルウェアをアプリケーションに追加
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with CORS and TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

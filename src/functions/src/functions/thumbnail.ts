const axios = require("axios");
import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

const Hosting = process.env["PlaywrightServer"];
const AZURE_STORAGE_ACCOUNT = process.env["AZURE_STORAGE_ACCOUNT"];
const AZURE_STORAGE_ACCESS_KEY = process.env["AZURE_STORAGE_ACCESS_KEY"];
const AZURE_STORAGE_CONTAINER = process.env["AZURE_STORAGE_CONTAINER"];

export async function thumbnail(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const url =
    request.query.get("url") ||
    (await request.text()) ||
    "https://haramizu.com";

  let domain: string | null = null;
  let path: string | null = null;
  let filename: string | null = null;

  // domain check
  try {
    if (typeof url === "string") {
      const parsedUrl = new URL(url);
      domain = parsedUrl.hostname;
      path = parsedUrl.pathname;

      if (!/\..{2,}$/.test(domain)) {
        throw new Error("Invalid URL: Domain is not correct");
      }

      // If the first character is /, remove
      path = path.substring(1);

      // If path is less than 1 character, rewrite it to index
      filename = path.replace(/\./g, "_").replace(/\//g, "_");

      // If the last character of filename is _, delete
      if (filename.endsWith("_")) {
        filename = filename.slice(0, -1);
      }

      if (filename.length <= 1) {
        filename = "index";
      }
    } else {
      throw new Error("Invalid URL");
    }
  } catch (error) {
    console.log(error);

    // Returns the response if an error occurs
    return { status: 400, body: "Invalid URL" };
  }

  try {
    // Set up an Azure Blob Storage connection
    const blobServiceClient = new BlobServiceClient(
      `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
      new StorageSharedKeyCredential(
        AZURE_STORAGE_ACCOUNT,
        AZURE_STORAGE_ACCESS_KEY
      )
    );
    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER
    );
    const blobClient = containerClient.getBlockBlobClient(
      `${domain}/${filename}.png`
    );

    const blobExists = await blobClient.exists();
    if (!blobExists) {
      const externalApiUrl = Hosting + "/api/screenshot?url=" + url;
      const response = await axios.get(externalApiUrl);
      const imageData = response.data.screenshot;

      const decodedImageData = Buffer.from(imageData, "base64");
      const options = { blobHTTPHeaders: { blobContentType: "image/png" } };
      await blobClient.uploadData(decodedImageData, options);

      console.log("upload new file");
      return {
        status: 200,
        headers: {
          "Content-Type": "image/png", // 画像のMIMEタイプに合わせて設定
        },
        body: Buffer.from(imageData, "base64"),
      };
    } else {
      console.log("Blob already exists, skipping upload");

      const response = await blobClient.downloadToBuffer();
      return {
        status: 200,
        headers: {
          "Content-Type": "image/png", // 画像のMIMEタイプに合わせて設定
        },
        body: response,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

app.http("thumbnail", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: thumbnail,
});

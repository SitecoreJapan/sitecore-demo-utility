// import axios from "axios";
'use client'
import {
  AZURE_STORAGE_ACCOUNT,
  AZURE_STORAGE_ACCESS_KEY,
  AZURE_STORAGE_CONTAINER,
} from "@/constants/azurestorage";
import { PLAYWRIGHT_HOST_URI } from "@/constants/playwrightserver";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

export default async function upload(url: string) {
  let domain: string | null = null;
  let path: string | null = null;
  let filename: string | null = null;
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
  }
  const sharedKeyCredential = new StorageSharedKeyCredential(
    AZURE_STORAGE_ACCOUNT,
    AZURE_STORAGE_ACCESS_KEY
  );

  const blobServiceClient = new BlobServiceClient(
    `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
    sharedKeyCredential
  );
  const containerClient = blobServiceClient.getContainerClient(
    AZURE_STORAGE_CONTAINER
  );
  try {
    const blockBlobClient = containerClient.getBlockBlobClient(
      domain + "/" + filename + ".png"
    );
    const exists = await blockBlobClient.exists();
    if (!exists) {
      console.log("file upload");
    } else {
      console.log("exist file");
    }
  } catch (error) {
    console.log("Can't get content data");
  }
}

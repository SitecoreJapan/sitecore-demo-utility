/// <reference types="vite/client" />

interface ImportEnv {
  VITE_SEARCH_DISCOVER: string;
  VITE_SEARCH_ID: number;
  VITE_ITEM_NUM: number;

  PLAYWRIGHT_HOST_URI: string;

  AZURE_STORAGE_ACCOUNT: string;
  AZURE_STORAGE_ACCESS_KEY: string;
  AZURE_STORAGE_CONTAINER: string;
}

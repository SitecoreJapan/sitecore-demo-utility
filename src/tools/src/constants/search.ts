export const NEXT_PUBLIC_SEARCH_ENDPOINT =
  process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "";
export const NEXT_PUBLIC_SEARCH_SOURCE_ID =
  process.env.NEXT_PUBLIC_SEARCH_SOURCE_ID || "";
export const NEXT_PUBLIC_SEARCH_LOCALE =
  process.env.NEXT_PUBLIC_SEARCH_LOCALE || "";
export const NEXT_PUBLIC_SEARCH_BATCH_SIZE = parseInt(
  process.env.NEXT_PUBLIC_SEARCH_BATCH_SIZE || "30",
  10
);

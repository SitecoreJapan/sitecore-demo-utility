// src/util/search/index.ts
import { NEXT_PUBLIC_SEARCH_ENDPOINT } from "@/constants/search";

export const fetchData = async (query: any) => {
  const url = NEXT_PUBLIC_SEARCH_ENDPOINT;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (!response.ok) {
      throw new Error("ネットワークエラーが発生しました");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`フェッチ中にエラーが発生しました: ${error}`);
  }
};

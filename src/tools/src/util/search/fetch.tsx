// api.ts
import { NEXT_PUBLIC_SEARCH_ENDPOINT } from "@/constants/search";

export const fetchData = async () => {
  const url = NEXT_PUBLIC_SEARCH_ENDPOINT;
  const data = {
    context: {
      page: {
        uri: "/",
      },
      locale: {
        country: "us",
        language: "en",
      },
    },
    widget: {
      items: [
        {
          entity: "content",
          rfk_id: "rfkid_7",
          search: {
            content: {
              fields: ["url"],
            },
            limit: 30,
            offset: 0,
          },
          sources: ["886101"],
        },
      ],
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

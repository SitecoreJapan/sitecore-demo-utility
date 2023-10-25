import { SEARCH_DISCOVER } from "../constants/searchserver";
import { getUrlQuery, SearchResults } from "../interfaces/getUrls";

export async function fetchData(
  sourceId: number,
  offsetNum: number
): Promise<SearchResults> {
  try {
    const url = SEARCH_DISCOVER;
    const query = getUrlQuery(sourceId, offsetNum);

    const response = await fetch(url, {
      method: "POST", // HTTPメソッドは必要に応じて変更
      headers: {
        "Content-Type": "application/json",
      },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`http error: ${response.status}`);
    }

    const data = await response.json(); // JSONデータを解析
    console.log(data);

    return data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
}

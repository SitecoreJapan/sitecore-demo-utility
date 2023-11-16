import { fetchData } from "@/util/search/fetch";
import {
  AllSearchResponse,
  Content,
  getSearchTotalItemQuery,
  getSearchUrlsQuery,
} from "@/interfaces/search";
import {
  NEXT_PUBLIC_SEARCH_BATCH_SIZE,
  NEXT_PUBLIC_SEARCH_LOCALE,
  NEXT_PUBLIC_SEARCH_SOURCE_ID,
} from "@/constants/search";

export const getSearchTotalItem = async (): Promise<number> => {
  const results: AllSearchResponse = (await fetchData(
    getSearchTotalItemQuery(
      NEXT_PUBLIC_SEARCH_LOCALE,
      NEXT_PUBLIC_SEARCH_SOURCE_ID
    )
  )) as AllSearchResponse;

  const totalItem: number = results.widgets[0].total_item;

  return totalItem;
};

export const getSearchUrls = async (
  offsetValue: number
): Promise<Partial<Content>[]> => {
  const results: AllSearchResponse = (await fetchData(
    getSearchUrlsQuery(
      offsetValue,
      NEXT_PUBLIC_SEARCH_BATCH_SIZE,
      NEXT_PUBLIC_SEARCH_LOCALE,
      NEXT_PUBLIC_SEARCH_SOURCE_ID
    )
  )) as AllSearchResponse;

  const urls: Partial<Content>[] = [];

  results.widgets[0].content.forEach((content: Partial<Content>) => {
    urls.push({
      id: content.id,
      source_id: content.source_id,
      url: content.url,
    });
  });

  return urls;
};

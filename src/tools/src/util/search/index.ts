import { fetchData } from "@/util/search/fetch";
import {
  AllSearchResponse,
  getSearchTotalItemQuery,
} from "@/interfaces/search";
import {
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

interface Widget {
  rfk_id: string;
  type: string;
  used_in: string;
  entity: string;
  content: Content[];
  total_item: number;
  limit: number;
  offset: number;
  errors: Error[];
}

interface Content {
  id: string;
  source_id: string;
  url: string;
}

interface Error {
  message: string;
  type: string;
  severity: string;
}

interface AllSearchResponse {
  widgets: Widget[];
  dt: number;
  ts: number;
}

import { fetchData } from "@/util/search";

export const getSearchTotalItem = async (): Promise<number> => {
  const results: AllSearchResponse = (await fetchData(
    getSearchTotalItemQuery("892427")
  )) as AllSearchResponse;

  const totalItem: number = results.widgets[0].total_item;

  return totalItem;
};

const getSearchTotalItemQuery = (id: string) => {
  return JSON.parse(`
    {
      "context": {
        "page": {
          "uri": "/"
        },
        "locale": {
          "country": "jp",
          "language": "ja"
        }
      },
      "widget": {
        "items": [
          {
            "entity": "content",
            "rfk_id": "rfkid_7",
            "search": {
              "content": {
                "fields": ["url"]
              },
              "limit": 3,
              "offset": 0
            },
            "sources": ["${id}"]
          }
        ]
      }
    }
  `);
};

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

export interface Content {
  id: string;
  source_id: string;
  url: string;
}

interface Error {
  message: string;
  type: string;
  severity: string;
}

export interface AllSearchResponse {
  widgets: Widget[];
  dt: number;
  ts: number;
}

export const getSearchTotalItemQuery = (locale: string, id: string) => {
  const [language, country] = locale.split("-");

  return JSON.parse(`
    {
      "context": {
        "page": {
          "uri": "/"
        },
        "locale": {
          "country": "${country}",
          "language": "${language}"
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

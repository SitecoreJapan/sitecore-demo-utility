export interface ContentItem {
  id: string;
  name: string;
  source_id: string;
  url: string;
}

export interface Widget {
  rfk_id: string;
  type: string;
  used_in: string;
  entity: string;
  content: ContentItem[];
  total_item: number;
  limit: number;
  offset: number;
  errors: {
    message: string;
    type: string;
    severity: string;
  }[];
}

export interface SearchResults {
  widgets: Widget[];
  dt: number;
  ts: number;
}

export const getUrlQuery = (
  sourceId: number,
  offsetNum: number,
  itemNum: number
) => {
  return `
{
    "context": {
        "page": {
            "uri": "/"
        },
        "locale": {
            "country": "us",
            "language": "en"
        }
    },
    "widget": {
        "items": [
            {
                "entity": "content",
                "rfk_id": "rfkid_7",
                "search": {
                    "content": {
                        "fields": [
                            "name",
                            "url"
                        ]
                    },
                    "limit": ${itemNum},
                    "offset": ${offsetNum}
                },
                "sources": [
                    "${sourceId}"
                ]
            }
        ]
    }
}
    `;
};

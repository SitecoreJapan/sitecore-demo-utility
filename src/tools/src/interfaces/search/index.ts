export function searchTotalItem(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const targetSources: string[] = [id];

      const result = {
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
              rfk_id: `rfkid_7`,
              search: {
                content: {
                  fields: ["url"],
                  limit: 30,
                  offset: 0,
                },
              },
              sources: targetSources,
            },
          ],
        },
      };

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

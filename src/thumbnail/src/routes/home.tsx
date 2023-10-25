// src/routes/Home.tsx
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { SEARCH_ID, ITEM_NUM } from "../constants/searchserver";
import { fetchData } from "../util/fetch";
import { SearchResults } from "../interfaces/getUrls";

const Home: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleButtonClick = async () => {
    setText("Execute");

    try {
      const totalItems: SearchResults = await fetchData(SEARCH_ID, 0, 10);

      console.log(totalItems);

      const paging =
        Math.floor(totalItems.widgets[0].total_item / ITEM_NUM) + 1;

      for (let i = 0; i < paging; i++) {
        const contentList: SearchResults = await fetchData(
          SEARCH_ID,
          i * ITEM_NUM,
          ITEM_NUM
        );

        for (let j = 0; j < contentList.widgets[0].limit; j++) {
          const contentItem = contentList.widgets[0].content[j];

          // ここに画像生成のロジックを追加する

          console.log("URL:", contentItem.url);
          setText(contentItem.url);
        }
        console.log(`loop ${i + 1} `);
      }
    } catch (error) {
      // エラーハンドリングを行う
      console.error("An error occurred while retrieving data:", error);
    }

    console.log(SEARCH_ID);
    setText("done");
  };

  return (
    <div>
      <h1 className="text-2xl underline text-center text-blue-800">Home</h1>
      <p className="text-center">Welcome to the home page!</p>

      <div className="flex justify-center items-center">
        <Button onClick={handleButtonClick} color="primary">
          Button
        </Button>
      </div>
      <div className="flex justify-center items-center">{text}</div>
    </div>
  );
};

export default Home;

// src/routes/Home.tsx
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { SEARCH_ID } from "../constants/searchserver";
import { fetchData } from "../util/fetch";
import { SearchResults } from "../interfaces/getUrls";

const Home: React.FC = () => {
  const [text, setText] = useState<string>(""); // テキストの初期値を空に設定

  const handleButtonClick = () => {
    // ボタンクリック時の処理
    setText("ボタンがクリックされました");

    fetchData(SEARCH_ID, 0)
      .then((data: SearchResults) => {
        console.log(data);

        const total_item = data.widgets[0].total_item;
        setText(total_item.toString());
        // 例: 最初のcontentアイテムの名前とURLをログに表示
        if (data.widgets.length > 0 && data.widgets[0].content.length > 0) {
          const firstContentItem = data.widgets[0].content[0];
          console.log("Name:", firstContentItem.name);
          console.log("URL:", firstContentItem.url);
        }
      })
      .catch((error) => {
        // エラーハンドリングを行う
        console.error("データの取得中にエラーが発生しました:", error);
      });

    console.log(SEARCH_ID);
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

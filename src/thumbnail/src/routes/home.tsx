// src/routes/Home.tsx
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Home: React.FC = () => {
  const [text, setText] = useState<string>(""); // テキストの初期値を空に設定

  const handleButtonClick = () => {
    // ボタンクリック時の処理
    setText(`入力されたテキスト: ${text}`);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // テキスト入力が変更されたときの処理
    setText(e.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl underline text-center text-blue-800">Home</h1>
      <p className="text-center">Welcome to the home page!</p>
      <Input
        type="text"
        label="Source ID"
        value={text}
        onChange={handleTextChange}
      />

      <Button onClick={handleButtonClick} color="primary">
        Button
      </Button>
      <div>{text}</div>
    </div>
  );
};

export default Home;

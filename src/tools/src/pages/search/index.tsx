// pages/index.tsx

import { Box, Button, ChakraProvider, Input } from "@chakra-ui/react";
import { useState } from "react";

const Home: React.FC = () => {
  const [inputText, setInputText] = useState<string>(""); // テキストボックスの値を管理するためのstate
  const [displayText, setDisplayText] = useState<string>(""); // 表示するテキストを管理するためのstate

  const handleClick = () => {
    // ボタンがクリックされたときのロジックをここに追加
    setDisplayText(`入力されたテキスト: ${inputText}`);

    console.log("ボタンがクリックされました！");
  };

  return (
    <ChakraProvider>
      <Box>
        <Input
          placeholder="テキストを入力してください"
          mb={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={handleClick}>クリック</Button>
        <p>{displayText}</p>
      </Box>
    </ChakraProvider>
  );
};

export default Home;

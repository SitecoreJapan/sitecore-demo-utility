// pages/index.tsx

import Layout from "@/PageLayout/PageLayout";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState<string>(""); // テキストボックスの値を管理するためのstate
  const [displayText, setDisplayText] = useState<string>(""); // 表示するテキストを管理するためのstate

  const handleClick = () => {
    // ボタンがクリックされたときのロジックをここに追加
    setDisplayText(`入力されたテキスト: ${inputText}`);

    console.log("ボタンがクリックされました！");
  };

  return (
    <Layout>
      <Flex w="full" alignItems="center" my="16">
        <Container>
          {" "}
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
        </Container>
      </Flex>
    </Layout>
  );
}

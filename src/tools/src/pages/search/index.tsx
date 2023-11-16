import axios from "axios";

import Layout from "@/pageLayout/PageLayout";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { getSearchTotalItem } from "@/interfaces/search";

export default function Home() {
  const [inputText, setInputText] = useState<string>(""); // テキストボックスの値を管理するためのstate
  const [displayText, setDisplayText] = useState<string>(""); // 表示するテキストを管理するためのstate

  const handleClick = async () => {
    const result = await getSearchTotalItem();

    console.log(result);
    setDisplayText(`入力されたテキスト: ${inputText}`);

    console.log("ボタンがクリックされました！");
  };

  return (
    <Layout>
      <Flex w="full" alignItems="center" my="16">
        <Container>
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

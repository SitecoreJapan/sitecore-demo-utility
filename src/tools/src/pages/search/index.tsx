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
import { getSearchTotalItem, getSearchUrls } from "@/util/search";
import { NEXT_PUBLIC_SEARCH_BATCH_SIZE } from "@/constants/search";
import { NEXT_PUBLIC_PLAYWRIGHT } from "@/constants/playwright";

export default function Home() {
  const [inputText, setInputText] = useState<string>(""); // テキストボックスの値を管理するためのstate
  const [displayText, setDisplayText] = useState<string>(""); // 表示するテキストを管理するためのstate

  const handleClick = async () => {
    const totalItem = await getSearchTotalItem();
    console.log(totalItem);

    for (let i = 0; i <= totalItem / NEXT_PUBLIC_SEARCH_BATCH_SIZE; i++) {
      console.log(i);
      const urls = await getSearchUrls(i * NEXT_PUBLIC_SEARCH_BATCH_SIZE);
      for (const urlItem of urls) {
        const response = await fetch(
          `/api/thumbnail?url=${encodeURIComponent(urlItem.url || "")}`
        );
        const thumbnailData = await response.json();
        setDisplayText(`URL: ${urlItem.url}`);
        console.log(thumbnailData);
      }
    }

    setDisplayText(`Finish`);

    console.log("Completed");
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

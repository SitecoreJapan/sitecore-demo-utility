import { Box, Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Box layerStyle="section.topbar" shadow={"base"}>
      <Flex h="14" align={"center"} justify="space-between"></Flex>
    </Box>
  );
}

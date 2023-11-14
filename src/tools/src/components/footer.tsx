// components/footer.tsx
import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box p="4" bg={"neutral-fg"} textColor={"chakra-inverse-text"}>
      <Text>© Copyright 2023, Sitecore. All Rights Reserved</Text>
    </Box>
  );
}

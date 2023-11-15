// components/layout.tsx

import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Flex flexFlow="column nowrap" minH={"100vh"}>
        <Navbar />
        <main>
          <Box flex="1">{children}</Box>
        </main>
        <Footer />
      </Flex>
    </>
  );
}

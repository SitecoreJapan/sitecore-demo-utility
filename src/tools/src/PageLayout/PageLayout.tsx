// components/layout.tsx
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Flex flexFlow="column nowrap" minH={"100vh"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}

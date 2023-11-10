import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import sitecoreTheme from "@sitecore/blok-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={sitecoreTheme}
      toastOptions={{
        defaultOptions: {
          position: "bottom-left",
          variant: "subtle",
          containerStyle: {
            mt: "0",
            mb: "4",
            mx: "4",
          },
        },
      }}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

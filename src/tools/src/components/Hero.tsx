import { Button, Container, Flex, Heading, Text, Image, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link';

const Hero = () => {
    return (
    <Flex w="full" alignItems='center' my="16">
        <Container>
          <Image
            mb="8"
            h="24"
            src={useColorModeValue("https://sitecorecontenthub.stylelabs.cloud/api/public/content/37768281ce944bafb141bc1d4741fae1",
                  "https://sitecorecontenthub.stylelabs.cloud/api/public/content/507bd1b6eaa04385b07cfe44a424e053")}
            alt="Sitecore Blok logo"
          />
          <Stack spacing="6" align="start">
            <Heading as="h1" size="xl">
              Build better products faster
            </Heading>
            <Text variant="subtle" maxW="prose">
              Blok is <NextLink href="https://www.sitecore.com">Sitecore’s</NextLink> product design system: the UI framework and style guide we use to build great apps.
              It’s publicly available, so that anyone can easily build software in the Sitecore design language.
            </Text>
            <Button as={NextLink} href="https://blok.sitecore.com/get-started">
              Get started
            </Button>
          </Stack>
          </Container>
      </Flex>
    )
}
    
export default Hero
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSolidMoon } from "react-icons/bi";
import { mdiChevronDown, mdiChevronUp, mdiCircleHalfFull } from "@mdi/js";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box layerStyle="section.topbar" shadow={"base"}>
      <Flex h="14" align={"center"}>
        <HStack flexShrink={0}>
          <Link href="/">
            <Image
              p="1"
              h="8"
              w={[8, 8, "auto"]}
              fit="cover"
              align="left"
              alt="Sitecore Blok"
              src={useColorModeValue(
                `${"https://sitecorecontenthub.stylelabs.cloud/api/public/content/37768281ce944bafb141bc1d4741fae1"}`,
                `${"https://sitecorecontenthub.stylelabs.cloud/api/public/content/507bd1b6eaa04385b07cfe44a424e053"}`
              )}
            />
          </Link>
        </HStack>
        <Stack direction={"row"} w="full" alignItems={"center"} px={4}>
          <Menu>
            <Button
              size="sm"
              as={Link}
              variant="navigation"
              isActive={false}
              href="/search"
            >
              Search
            </Button>

            {/* <MenuButton ml={4}>Menu</MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList> */}
          </Menu>
        </Stack>
        <Flex justifyContent="flex-end">
          <ButtonGroup size="sm" variant="ghost">
            <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
              <IconButton
                onClick={toggleColorMode}
                icon={
                  <Icon>
                    <path d={mdiCircleHalfFull} />
                  </Icon>
                }
                aria-label={colorMode === "light" ? "Dark mode" : "Light mode"}
              />
            </Tooltip>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
}

import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Box as="nav" bg="gray.800" p={4}>
      <Flex justify="space-around" color="white">
        <NextLink href="/" passHref>
          <Link>Homepage</Link>
        </NextLink>
        <NextLink href="/search" passHref>
          <Link>Search</Link>
        </NextLink>
        <NextLink href="/city" passHref>
          <Link>City</Link>
        </NextLink>
        <NextLink href="/favorites" passHref>
          <Link>Favorites</Link>
        </NextLink>
      </Flex>
    </Box>
  );
}

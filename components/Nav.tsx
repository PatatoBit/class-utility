import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ItemProps {
  active: boolean;
}

function LinkItem(props: any) {
  return (
    <Link href={props.path}>
      <Box p={2} textAlign="center" flexDirection="row" w="100px">
        {props.children}
      </Box>
    </Link>
  );
}

function Nav({ children }: React.PropsWithChildren) {
  return (
    <>
      <Box
        position="relative"
        as="nav"
        w="100%"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem path="/">Home</LinkItem>
            <LinkItem path="/seat">Seat</LinkItem>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Nav;

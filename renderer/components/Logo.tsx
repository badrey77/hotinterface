import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'
import { Box, Link, Text } from "@chakra-ui/react";

export const Logo = () => (
    <Link _hover={{"textDecoration":"none"}} as={NextLink} href='/'>
        <Box textColor={"white"} p='2'>
            <Text fontWeight="bold" size='md'><HamburgerIcon />{'   '}HOTEL</Text>
        </Box>
    </Link>
)
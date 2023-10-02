import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import NextLink from 'next/link'

export const Header = () => (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Spacer />
        <ButtonGroup gap='2'>
            <Button as={NextLink} href={"/"} colorScheme='teal'>Home</Button>
            <Button as={NextLink} href={"/about"} colorScheme='teal'>About</Button>
            <Button as={NextLink} href={"/initial-props"} colorScheme='teal'>With Initial Props</Button>
        </ButtonGroup>
    </Flex>
)
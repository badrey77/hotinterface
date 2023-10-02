import { BiCalendar, BiCog, BiCreditCard, BiHotel, BiMailSend, BiSolidReport, BiUser } from "react-icons/bi";
import { Box, Button, ButtonGroup, Center, Flex, Heading, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

export const Sidebar = () => (
    <Box pt={"10"} pl={10}>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} textAlign={"left"} display={"flex"}><BiUser fontSize={30} />Clients</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiHotel fontSize={30} />Reservations</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiSolidReport fontSize={30} />Rapports</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiCalendar fontSize={30} />Calendrier</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiMailSend fontSize={30} />E-mail</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiCreditCard fontSize={30} />Paiements</Text></Link>
        <Link _hover={{"textDecoration":"none", "textColor":"red.300"}} textColor={"white"} as={NextLink} href="/"><Text marginBottom={5} display={"flex"} ><BiCog fontSize={30} />Paramêtres</Text></Link>
    </Box>
)
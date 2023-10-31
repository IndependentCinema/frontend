import React from 'react';
import {
    Box,
    Text,
    Button,
    useColorModeValue,
    Flex,
    useColorMode,
    Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Index() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box py={10} mt={"100"}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    ml: 8,
                }}
            >
                <Link href='/'>
                    <Text fontSize={"2xl"} fontWeight={"bold"} fontStyle={"italic"}>
                        INDEPENDENT CINEMA APP
                    </Text>
                </Link>
            </Flex>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                {/* All rights reserved, 2023 © Centennial College
                © 2022 Chakra Templates. All rights reserved */}
                © 2023 Centennial College. All rights reserved
            </Text>
        </Box>
    )
}

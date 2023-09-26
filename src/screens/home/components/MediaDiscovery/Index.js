import React from 'react';
import { 
    Flex, Button, Text, VStack, 
    useBreakpointValue, Container,
    Input, InputGroup, InputRightElement,
    useColorModeValue
} from '@chakra-ui/react';

export default function Index(props) {
    return (
        <Flex
            w={'full'}
            h={'300px'}
            backgroundImage={
            'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                alignItems={'flex-start'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >
                <Container maxW={["2xl","2xl","3xl", "4xl", "6xl"]} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
                    >
                        Welcome
                    </Text>
                    <Text mt={"2"}
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
                    >
                        Lots of movies and people to discover. Explore now.
                    </Text>

                    <InputGroup w={{ base: "100%", md: "xl" }} size='md' mt={5}>
                        <Input
                            pr='4.5rem'
                            type={'text'}
                            placeholder='Enter movie name or keyword'

                            bg={useColorModeValue('gray.100', 'gray.900')}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' bg={'gray.300'} onClick={()=>{}}>
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Container>
            </VStack>
        </Flex>
    )
}
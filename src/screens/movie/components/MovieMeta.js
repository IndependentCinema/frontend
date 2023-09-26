import React, { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  Divider,
  Input
} from '@chakra-ui/react';
import CastList from '../../../components/CastList/Index';
import { NumberWithCommas } from '../../../Helpers';

export default function MovieMeta({ movie }) {
    const headingColorMode = useColorModeValue('yellow.500', 'yellow.300')
    
    return (
        <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            justifyContent={"space-between"}
            // alignItems={""}
            divider={
                <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }
        >

            
            
            <Box>
                <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={headingColorMode}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                >
                    Meta
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                        <ListItem>Original Title</ListItem>
                        <ListItem>Original Language</ListItem>{' '}
                        <ListItem>Budget</ListItem>
                        <ListItem>Revenue</ListItem>
                        <ListItem>Runtime</ListItem>
                    </List>
                    <List spacing={2}>
                        <ListItem>{movie.original_title}</ListItem>
                        <ListItem>{movie.original_language}</ListItem>
                        <ListItem>${NumberWithCommas(movie.budget)}</ListItem>
                        <ListItem>${NumberWithCommas(movie.revenue)}</ListItem>
                        <ListItem>{movie.runtime} mins</ListItem>
                    </List>
                </SimpleGrid>
            </Box>

            {
                movie.casts.length > 0 && (
                    <Box>
                        <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            color={headingColorMode}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                            mb={'4'}
                        >
                            Cast
                        </Text>
        
                        <CastList data={movie.casts} layout={"slider"} />
                    </Box>
                    
                )
            }
            
            
        </Stack>
    )
}

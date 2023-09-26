import React, { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
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
} from '@chakra-ui/react'
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import PageHeading from '../../components/PageHeading/Index';
import CastList from '../../components/CastList/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';
import { MdLocalShipping } from 'react-icons/md';

import { NumberWithCommas } from '../../Helpers';
import Breadcrumb from '../../components/Breadcrumb';
import TicketBooking from './components/TicketBooking';
import MovieMeta from './components/MovieMeta';


export default function Index() {
    const { movie } = useLoaderData();
    const [ShowGetTicket, setShowGetTicket] = useState(false)
    const [BookingDate, setBookingDate] = useState(
        new Date().toJSON().slice(0, 10)
    )
    const [ShowTicketBooking, setShowTicketBooking] = useState(false)
    
    const colorModeA = useColorModeValue('gray.900', 'gray.100')
    const colorModeB = useColorModeValue('gray.100', 'gray.900')
    const colorModeC = useColorModeValue('gray.900', 'gray.400')
    const colorModeD = useColorModeValue('gray.500', 'gray.400')

    return (
        <Box>
            <Header />

            <PageActivityIndicator />

            <Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]}>
                <Breadcrumb
                    activeCrumb={{
                        title: movie.title,
                        path: "#"
                    }}
                    crumbs={[
                        // {
                        //     title: movie.title,
                        //     path: "#"
                        // }
                    ]}
                />
                
                {
                    ShowTicketBooking ? (
                        <TicketBooking
                            movie={movie}
                            booking={{
                                date: BookingDate,
                                time: "6:00 PM"
                            }}
                            setShowTicketBooking={setShowTicketBooking}
                        />

                    ) : (
                        <>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2 }}
                                spacing={{ base: 8, md: 10 }}
                                pb={{ base: 18, md: 24 }}
                                // mt={5}
                            >
                                <Flex>
                                    <Image
                                    rounded={'md'}
                                    src={`https://www.dvdplanetstore.pk/wp-content/uploads/2017/12${movie.poster_path}`} 
                                    alt={`Picture of ${movie.title}`} 
                                    onError={(ev)=>{
                                        ev.target.src = "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
                                    }}
                                    fit={'cover'}
                                    align={'center'}
                                    w={'100%'}
                                    h={{ base: '100%', sm: '450px', lg: '600px' }}
                                    />
                                </Flex>
                                <Stack spacing={{ base: 6, md: 10 }}>
                                    <Box as={'header'}>
                                        <Heading
                                            lineHeight={1.1}
                                            fontWeight={600}
                                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                                        >
                                            {movie.title}
                                        </Heading>
                                        <Text
                                            color={colorModeC}
                                            fontWeight={300}
                                            fontSize={'lg'}
                                            fontStyle={'italic'}
                                            mt={1}
                                            mb={2}
                                        >
                                            {movie.tagline}
                                        </Text>

                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                            <Text
                                                color={colorModeD}
                                                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                                                fontWeight={'300'}
                                            >
                                                    {movie.overview}
                                            </Text>
                                        </VStack>

                                        {
                                            ShowGetTicket ? (
                                                <Box>
                                                    <Divider my={5} />

                                                    <Text fontSize={"2xl"} mb={3}>
                                                        REGULAR
                                                    </Text>

                                                    <Box>
                                                        <Text mb={2}>
                                                            Viewing Date
                                                        </Text>

                                                        <Input 
                                                            type={"date"}
                                                            value={BookingDate}
                                                            onChange={(e)=>setBookingDate(e.target.value)}  
                                                        />

                                                        <Text mt={5}>
                                                            Viewing Time
                                                        </Text>

                                                        <Badge 
                                                            px={3} py={1} my={2}
                                                            colorScheme={colorModeB}
                                                            bg={"blue"}
                                                        >
                                                            6:00 PM
                                                        </Badge>
                                                    </Box>

                                                    <Button 
                                                        rounded={"full"} 
                                                        fontSize="0.8em"
                                                        px={3} py={1} my={3}
                                                        colorScheme={colorModeB}
                                                        bg={colorModeA}
                                                        onClick={()=>setShowTicketBooking(true)}
                                                    >
                                                        Choose Seats
                                                    </Button>
                                                </Box>
                                            ) : (
                                                <Button 
                                                    border={"1px solid darkgrey"}
                                                    rounded="full" 
                                                    fontSize="0.8em"
                                                    px={3} py={1} my={3}
                                                    colorScheme={colorModeB}
                                                    bg={colorModeA}
                                                    onClick={()=>setShowGetTicket(true)}
                                                >
                                                    Get Tickets
                                                </Button>
                                            )
                                        }

                                        
                                    </Box>
                                </Stack>
                            </SimpleGrid>

                            <MovieMeta 
                                movie={movie}
                            />
                        </>
                    )
                }

            </Container>

            <Footer />
        </Box>
    )
}
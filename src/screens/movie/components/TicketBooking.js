import React, { useState, useEffect } from 'react';
import { redirect, useLocation } from "react-router-dom";
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
  Input,
  Center
} from '@chakra-ui/react';
import { GetStripe } from '../../../Helpers';
import { AttemptBookTicket, AttemptUpdateBooking } from '../helper';

export default function TicketBooking({ movie, booking, setShowTicketBooking }) {
    const [SelectedSeat, setSelectedSeat] = useState(false)

    const colorModeA = useColorModeValue('gray.900', 'gray.100')

    const movieBooking = movie.bookings.filter(bookings => {
        if (Date.parse(bookings.date) == Date.parse(booking.date)) {
            return true
        }
    })?.[0]

    async function handleCheckout(movieBooking) {
        console.log("Go To Payment")
        
        console.log("movie: ", movie)
        console.log("movieBooking: ", movieBooking)
        console.log("booking: ", booking)
        console.log("SelectedSeat: ", SelectedSeat)

        if (movieBooking) {
            AttemptUpdateBooking({
                payload: {
                    movie: movie._id,
                    date: booking.date,
                    seats: [
                        ...movieBooking?movieBooking.seats:[], 
                        SelectedSeat
                    ]
                },
                bookingId: movieBooking._id
            })
        } else {
            AttemptBookTicket({
                movie: movie._id,
                date: booking.date,
                seats: [
                    ...movieBooking?movieBooking.seats:[], 
                    SelectedSeat
                ]
            })
        }

        

        // const stripe = await GetStripe();
        // const { error } = await stripe.redirectToCheckout({
        //   lineItems: [
        //     {
        //       price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
        //       quantity: 1,
        //     },
        //   ],
        //   mode: 'subscription',
        //   successUrl: `http://localhost:3000/success`,
        //   cancelUrl: `http://localhost:3000/cancel`,
        //   customerEmail: 'customer@email.com',
        // });
        // console.warn(error.message);
      }

    const getSeats = (takenSeats) => {
        const rows = 6
        const columns = 8
        const sortedSeats = [];
        // Initialize the 2D array with available seats
        for (let i = 0; i < rows; i++) {
            let rowId = i + 1
            sortedSeats[i] = [];
            for (let j = 0; j < columns; j++) {
                let colId = j + 1
                let taken = false
                takenSeats.map(takenSeat=>{
                    if (
                        takenSeat.row == rowId
                        &&
                        takenSeat.column == colId
                    ) {
                        taken = true
                    }
                })
                sortedSeats[i][j] = {
                    key: `${rowId}${colId}`,
                    taken: taken,
                    row: rowId,
                    column: colId
                };
            }
        }
        return sortedSeats
    }

    function checkSeatTaken(seat, selectedSeat) {
        if (seat === selectedSeat) {
            return true
        } else if (seat.taken) {
            return true
        } else return false
    }

    function _setSelectedSeat(seat) {
        if (!seat.taken) {
            setSelectedSeat(seat)
        }
    }

    return (
        <Box>
            <Flex direction={{ base: "column", md: "row" }}>
                <Image
                    rounded={'md'}
                    src={`https://www.dvdplanetstore.pk/wp-content/uploads/2017/12${movie.poster_path}`} 
                    alt={`Picture of ${movie.title}`} 
                    onError={(ev)=>{
                        ev.target.src = "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
                    }}
                    fit={'cover'}
                    align={'center'}
                    h={"250px"}
                    w={{ base: '100%', md: '40%' }}
                    mb={10}
                    // mr={10} 
                    mr={{ base: 0, md: 10 }}
                />

                <Box w={{ base: "100%", md: "60%" }}>
                    <Heading mb={5}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                    >
                        Ticket Details
                    </Heading>
                    
                    <SimpleGrid
                        columns={{ base: 2 }}
                    >
                        <Box>
                            <Text fontWeight={"extrabold"} mb={2}>
                                Date: 
                            </Text>

                            <Text mb={2}>
                                Today, Aug 5, 2023
                            </Text>
                        </Box>

                        <Box>
                            <Text fontWeight={"extrabold"} mb={2}>
                                Time:
                            </Text>

                            <Text mb={2}>
                                6:00 PM
                            </Text>
                        </Box>
                    </SimpleGrid>

                    <Box mt={5}>
                        <Text fontWeight={"extrabold"} mb={2}>
                            Location:
                        </Text>

                        <Text mb={2}>
                            Centenniel College Progress Cinema
                        </Text>
                    </Box>
                </Box>
            </Flex>

            
            <Divider my={10} />


            <Heading mb={5}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
            >
                Seat Selection
            </Heading>

            <Box>
                <Center
                    height={100}
                    width={"100%"}
                    bg={useColorModeValue("darkgray", "lightgray")}
                    color={useColorModeValue('gray.200', 'gray.700')}
                >
                    <Text>
                        SCREEN
                    </Text>
                </Center>

                <SimpleGrid mt={5}
                    columns={{ base: 8 }} spacing={2}
                >
                    {
                        getSeats(movieBooking ? movieBooking.seats : []).map(
                            (row, rowId) => {
                                return row.map((seat, colId) => {
                                    const bgColor = () => {
                                        let seatTaken = checkSeatTaken(seat, SelectedSeat)
                                        if (SelectedSeat.key == seat.key) return "green"
                                        return seatTaken ? "blue" : "gray.200"
                                    }
                                    return (
                                        <Center key={`${rowId}${colId}`}
                                            w={"50"} 
                                            h={"50"}
                                            bg={bgColor()}
                                            _hover={{
                                                bg: checkSeatTaken(seat, SelectedSeat) ? "pink": "gray.500",
                                                cursor: "pointer"
                                            }}
                                            onClick={async ()=> await _setSelectedSeat(seat)}
                                        >
                                            {seat.key}
                                        </Center>
                                    )
                                })
                            }
                        )
                    }
                </SimpleGrid>

                <Flex my={5}>
                    <Button mr={2} 
                        rounded={"full"} 
                        fontSize="0.8em"
                        px={3} py={1} my={3}
                        colorScheme={"red"}
                        bg={'gray.500'}
                        onClick={()=>{
                            setSelectedSeat(null)
                            setShowTicketBooking(false)
                        }}
                    >
                        Cancel
                    </Button>

                    <Button 
                        rounded={"full"} 
                        fontSize="0.8em"
                        px={3} py={1} my={3}
                        colorScheme={"green"}
                        bg={colorModeA}
                        onClick={()=>handleCheckout(movieBooking)}
                        isDisabled={SelectedSeat?false:true}
                    >
                        Submit
                        {/* Continue to Payment */}
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
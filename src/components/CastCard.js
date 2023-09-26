import React from 'react';
import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    VStack,
} from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';
import { Link } from 'react-router-dom';
  

export default function CastCard(props) {
    const {
        cast
    } = props

    return (
        <Box
            height={"100%"}
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            {/* <Link to={`/movie/${cast.actor.slug}`}>
                <Badge 
                    border={"1px solid darkgrey"}
                    rounded="full" position="absolute" 
                    bottom={"30%"} left={"40%"} px={3} py={1} fontSize="0.8em"
                    colorScheme={useColorModeValue('gray.200', 'gray.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                >
                    View
                </Badge>
            </Link> */}

            <VStack height={"100%"}>
                <Image 
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.actor.image}`} 
                    alt={`Picture of ${cast.actor.name}`} 
                    roundedTop="lg" 
                    width={"100%"}
                    bg={"lightgray"}
                    onError={(ev)=>{
                        ev.target.src = "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
                    }}
                    flexGrow={1}
                />

                <Flex flexDirection={"column"} 
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    paddingY={"2"}
                >
                    <Link to={`/movie/${cast.actor.slug}`} width={"90%"}>
                        <Text noOfLines={1} align={"center"}>
                            {cast.actor.name}
                        </Text>
                        <Text>as {cast.character}</Text>
                    </Link>
                </Flex>
            </VStack>
        </Box>
    )
}

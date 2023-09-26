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
import { FetchMoviePoster } from './helper';
  

export default function Index(props) {
    const {
        movie
    } = props

    function Rating({rating, numReviews}) {
        return (
            <Box alignItems="center">
                <Box display="flex" alignItems="center">
                    {Array(5)
                        .fill('')
                        .map((_, i) => {
                        const roundedRating = Math.round(rating) / 2
                        if (roundedRating - i >= 1) {
                            return (
                                <BsStarFill
                                    key={i}
                                    style={{ marginLeft: '1' }}
                                    color={i < rating ? 'teal.500' : 'gray.300'}
                                />
                            )
                        }
                        if (roundedRating - i === 0.5) {
                            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
                        }
                        return <BsStar key={i} style={{ marginLeft: '1' }} />
                        })
                    }
                </Box>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {numReviews} review{numReviews > 1 && 's'}
                </Box>
            </Box>
        )
    }

    return (
        <Box
            height={"100%"}
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            <Link to={`/movie/${movie.slug}`}>
                <Badge 
                    border={"1px solid darkgrey"}
                    rounded="full" position="absolute" 
                    bottom={"30%"} left={"40%"} px={3} py={1} fontSize="0.8em"
                    colorScheme={useColorModeValue('gray.200', 'gray.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                >
                    View
                </Badge>
            </Link>

            <VStack height={"100%"}>
                <Image 
                    src={`https://www.dvdplanetstore.pk/wp-content/uploads/2017/12${movie.poster_path}`} 
                    alt={`Picture of ${movie.title}`} 
                    roundedTop="lg" 
                    width={"100%"}
                    bg={"lightgray"}
                    onError={(ev)=>{
                        // let posterLink = FetchMoviePoster(movie)
                        // ev.target.src = posterLink
                        ev.target.src = "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
                    }}
                    flexGrow={1}
                />

                <Flex flexDirection={"column"} 
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    paddingY={"2"}
                >
                    <Link to={`/movie/${movie.slug}`} width={"90%"}>
                        <Text noOfLines={1} align={"center"}>
                            {movie.title}
                        </Text>
                    </Link>
                    <Rating 
                        rating={movie.vote_average} 
                        numReviews={movie.vote_count} 
                    />
                </Flex>
            </VStack>
        </Box>
    )
}

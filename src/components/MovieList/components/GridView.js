import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import MovieCard from '../../MovieCard/Index';


export default function GridView({ data }) {

    return (
        <SimpleGrid columns={[2, 2, 3, 4]} spacing={["5", "8", "12", "16"]}>
            {
                data.map(movieData => {
                    return (
                        <MovieCard movie={movieData} />
                    )
                })
            }
        </SimpleGrid>
    );
}
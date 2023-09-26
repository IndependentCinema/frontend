import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import CastCard from '../../CastCard';


export default function GridView({ data }) {

    return (
        <SimpleGrid columns={[2, 2, 3, 4]} spacing={["5", "8", "12", "16"]} mt={50}>
            {
                data.map(castData => {
                    return (
                        <CastCard cast={castData} />
                    )
                })
            }
        </SimpleGrid>
    );
}
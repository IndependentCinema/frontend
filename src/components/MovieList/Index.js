import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import MovieCard from '../../components/MovieCard/Index';
import SliderView from './components/SliderView';
import GridView from './components/GridView';


export default function Index(props) {
    const { data, layout } = props
    // console.log("data: ", data)

    if (data) {
        switch (layout) {
            case "slider":
                
                return (
                    <SliderView data={data} />
                )
        
            default:
                return (
                    <GridView data={data} />
                )
        }
        
    } else {
        return (
            <Box>
                <Text>
                    Invalid Dataset
                </Text>
            </Box>
        )
    }
    
}

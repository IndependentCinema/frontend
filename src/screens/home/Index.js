import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import { Box, Center, Text } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';

import SliderSection from './components/SliderSection/Index';
import MediaDiscovery from './components/MediaDiscovery/Index';
import PopularMoviesSection from './components/PopularMoviesSection/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';


export default function Index() {
    const navigation = useNavigation();
    const { popularMovies } = useLoaderData();
    console.log("popularMovies: ", popularMovies)
    
    return (
        <Box pos={"relative"}>
            <Header />

            <PageActivityIndicator />

            <Box>
                <MediaDiscovery />

                <PopularMoviesSection popularMovies={popularMovies} />

                {/* <SliderSection /> */}
            </Box>

            <Footer />
        </Box>
    )
}

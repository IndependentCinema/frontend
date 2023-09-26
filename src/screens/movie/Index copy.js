import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import PageHeading from '../../components/PageHeading/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';


export default function Index() {
    const navigation = useNavigation();
    const { movie } = useLoaderData();
    console.log("movie: ", movie)

    if (navigation.state === "loading") {
        return (
            <PageActivityIndicator />
        )
    }

    return (
        <Box>
            <Header />

            <PageHeading 
                title={movie.title}
            />

            <Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]}>

            </Container>

            <Footer />
        </Box>
    )
}

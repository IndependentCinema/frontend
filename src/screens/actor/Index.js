import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Box, Center, Container, Text } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import PageHeading from '../../components/PageHeading/Index';


export default function Index() {
    const { actor } = useLoaderData();
    console.log("actor: ", actor)

    return (
        <Box>
            <Header />

            <PageHeading 
                title={actor.name || "John Cena"}
            />

            <Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]}>

            </Container>

            <Footer />
        </Box>
    )
}

import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import PageHeading from '../../components/PageHeading/Index';
import MovieList from '../../components/MovieList/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';
import Breadcrumb from '../../components/Breadcrumb';


export default function Index() {
    const navigation = useNavigation();
    const { category } = useLoaderData();

    if (navigation.state === "loading") {
        return (
            <PageActivityIndicator />
        )
    }
    
    return (
        <Box>
            <Header />

            <PageHeading 
                title={category.name}
            />

            <Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]}>

                <Breadcrumb
                    activeCrumb={{
                        title: category.name,
                        path: "#"
                    }}
                    crumbs={[
                        // {
                        //     title: movie.title,
                        //     path: "#"
                        // }
                    ]}
                />

                <MovieList data={category.data} />
            </Container>

            <Footer />
        </Box>
    )
}

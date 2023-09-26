import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';
import PageHeading from '../components/PageHeading/Index';
import PageActivityIndicator from '../components/loader/PageActivityIndicator';


export default function AboutUs() {
    
    return (
        <Box>
            <Header />

            <PageActivityIndicator />

            <PageHeading 
                title={"About Us"}
            />

            <Container minW={"6xl"} mt={"20"}>
                <Box minH={"800px"}>
                    <Heading as={"h2"} textAlign={"center"}>
                        What is Cinerama?
                    </Heading>

                    <Text as={"p"} fontSize="lg">
                        We are a passionate group of students who came together in July 2023 with the aim of creating a space dedicated to movie enthusiasts. At CINERAMA, we love to experience the big screen and share our movie journeys with the world.

                        Our mission is to provide our users with a platform where they can find detailed information about the latest movies, conveniently purchase cinema tickets, and explore honest and objective reviews.

                        At CINERAMA, we strive to stay up-to-date with the most exciting movie releases and special events in the film industry. Our team of dedicated film critics works hard to provide unbiased and detailed reviews of movies hitting the big screen.
                        We understand the importance of the movie community, and we encourage our users to participate and share their own reviews and recommendations. We believe that cinema is a collective experience, and we aim to foster discussions and the exchange of ideas among fellow movie lovers.

                        Thank you for visiting CINERAMA and joining our film community! We hope you find all the information you need and enjoy your cinema experiences with us.
                        Please feel free to reach out to us if you have any questions or concerns.
                    </Text>

                    <Heading as={"h2"} textAlign={"center"} mt={10}>
                        Our Team
                    </Heading>
                    <Text as={"p"}fontSize="lg" align={"center"}>
                        At Cinerama, our success is attributed to the dedicated and passionate individuals who make up our team. We are a diverse group of six movie enthusiasts, brought together by a common love for cinema and a desire to create a remarkable movie-watching experience for you.
                    </Text>
                    
                    {/* <Heading as={"h2"} textAlign={"center"}>
                        Meet the Team
                    </Heading> */}
                    
                    <Text fontWeight={"bold"} as={"h3"} textAlign={"left"} mt={5}>
                        Development Team
                    </Text>
                    <ul>
                        <li>Bolutife</li>
                        <li>Nicolas</li>
                        <li>Maria Veronica</li>
                        <li>Razel</li>
                    </ul>

                    <Text fontWeight={"bold"} as={"h3"} textAlign={"left"}>
                        Design Team
                    </Text>
                    <ul>
                        <li>Gideon</li>
                    </ul>

                    <Text fontWeight={"bold"} as={"h3"} textAlign={"left"}>
                        Communication Team
                    </Text>
                    <ul>
                        <li>Francisco</li>
                    </ul>
                    <br />

                    <Text>
                        Together, we form a dynamic team, united by a shared passion for cinema and a commitment to providing you with an unforgettable movie experience. We are grateful for your support and look forward to enhancing your cinematic journey with Cinerama.
                    </Text>
                    <Text fontWeight={"bold"} align={"center"} mt={10}>
                        Lights, camera, and let's make movie magic together!
                    </Text>

                </Box>
            </Container>

            <Footer />
        </Box>
    )
}

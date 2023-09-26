import React from 'react';
import { Center, Text } from "@chakra-ui/react";
import { useNavigation } from "react-router-dom";
import { RingLoader } from 'react-spinners';

export default function PageActivityIndicator() {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <Center 
                h={"100%"}
                minH={"100vh"} 
                zIndex={1}
                background={"rgba(255,255,255,0.8)"}
                bgSize={"cover"}
                pos={"absolute"}
                top={0}
                right={0}
                left={0}
                bottom={0}
                color={"black"}
            >
                <RingLoader color="#36d7b7" />
            </Center>
        )
    }
}

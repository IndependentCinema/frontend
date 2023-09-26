import React from 'react';
import { VStack, Divider, Text } from '@chakra-ui/react';


export default function SectionHeading({ title }) {
    return (
        <VStack>
            <Text>
                {title}
            </Text>
            <Divider width={"20"}
                borderWidth={"5px"}
                borderRadius={"10"}
                // bg={"red"}
                colorScheme={"red"}
            />
        </VStack>
    )
}

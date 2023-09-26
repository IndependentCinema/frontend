import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
export default function ErrorMessage( message ) {
    console.log( message );
  return (
    <Box my={4}>
      <Alert status={message.message.clase} borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message.message.message}</AlertDescription>
      </Alert>
    </Box>
  );
}
import {React, useState} from 'react';
import { connect } from 'react-redux';
import {
    Box,
    Flex,
    Text,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Collapse,
    IconButton,
    Modal,
    Heading,
    Checkbox,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    ModalFooter,
    HStack,
    InputGroup,
    InputRightElement,    
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    AttemptRegister,
    mapStateToProps,
    mapDispatchToProps
} from './helper';


function RegisterModal(props) {  
  const {
        isOpen, 
        onClose,
        login: reduxLogin,
        setRememberMe: reduxRememberMe,
    } = props

  const [showPassword, setShowPassword] = useState(false);

  const attemptRegister = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const userName = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("firstName: ", firstName)
        console.log("password: ", password)

        if (firstName && lastName && userName && email && password) {
            const payload = {
              firstName: firstName, 
              lastName: lastName, 
              email: email, 
              userName: userName, 
              password: password 
            }
            let loggedInUser = await AttemptRegister({payload, reduxLogin})
            if (loggedInUser) {
                window.location.reload()
            }
        } else {
            alert('Enter valid email or password.');
            onClose()
        }
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          <form id="register-form" onSubmit={attemptRegister}>
            <FormControl>
              <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Create Account</Heading>
              </Stack>
              <Box p={4}>
                <FormLabel for="firstName">First Name</FormLabel>
                <Input name="firstName" type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="lastName">Last Name</FormLabel>
                <Input name="lastName" type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="email">Email address</FormLabel>
                <Input name="email" type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="userName">Username</FormLabel>
                <Input name="userName" type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    name={"password"}
                    type={showPassword ? 'text' : 'password'}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Flex justifyContent="center">
                <Box p={4} flex={1}>
                  <Button type="submit" form="register-form" colorScheme="blue" width="100%">
                    Register
                  </Button>
                </Box>
              </Flex>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterModal)
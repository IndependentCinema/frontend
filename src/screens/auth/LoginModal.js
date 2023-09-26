import { React, useState } from 'react';
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
    setShowPassword,

} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    AttemptLogin,
    mapStateToProps,
    mapDispatchToProps
} from './helper';
import ErrorMessage from './errorMessage';

function LoginModal(props) {
    const {
        isOpen,
        onClose,
        login: reduxLogin,
        setRememberMe: reduxRememberMe,
    } = props
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const attemptLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("email: ", email)
        console.log("password: ", password)
        if (email && password) {
            if (rememberMe) {
                reduxRememberMe(email)
            }
            const payload = {
                email: email,
                password: password
            }
            let loggedInUser = await AttemptLogin({ payload, reduxLogin })
            console.log(loggedInUser.data.user)    ;    
            if (loggedInUser.data.user) {
                console.log("ok");
                setError({clase:'success',message:loggedInUser.data.message});
                await delay(100);
                window.location.reload()
            }
            else{
                console.log("No ok");
                setError({clase:'error',message:loggedInUser.data.message});
            }
            console.log(loggedInUser.data.message);
        } else {
            
            alert('Enter valid email or password.');
            setError(null);
            //onClose()
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
                    <form id="login-form" onSubmit={attemptLogin}>
                    {error && <ErrorMessage message={error} />}
                        <FormControl>
                            <Box p={4}>
                                <Stack align={'center'}>
                                    <Heading fontSize={'3xl'}>Log In</Heading>
                                </Stack>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name="email" />
                            </Box>
                            <Box p={4}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                    // onChange={(e) => setShowPassword(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <IconButton
                                            icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            onClick={() => setShowPassword(!showPassword)}
                                            variant="ghost"
                                        />
                                    </InputRightElement>
                                </InputGroup>
                            </Box>
                            {/* <Box p={4}>
                                <Checkbox
                                    isChecked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                >
                                    Remember Me
                                </Checkbox>
                            </Box> */}
                            <Flex justifyContent="center">
                                <Box p={4} flex={1}>
                                    <Button type="submit" form="login-form" colorScheme="blue" width="100%">
                                        Log In
                                    </Button>
                                </Box>
                            </Flex>
                            {/* <Box p={4} textAlign="center">
                        New Member?{' '}
                        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={openRegister}>
                            Click Here
                        </span>
                        </Box> */}
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
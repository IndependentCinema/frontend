import {React, useState} from 'react';
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
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

function App() {
  const { isOpen: isLoginOpen, onOpen: openLogin, onClose: closeLogin } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const openRegister = () => {
    closeLogin();
    Registration.open();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
      setUserEmail(email);
      closeLogin();
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <>
          <div>Welcome, {userEmail}!</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Button onClick={openLogin}>Login</Button>
      )}

      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form id="login-form" onSubmit={handleLogin}>
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
                      onChange={(e) => setShowPassword(e.target.value)}
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
                <Box p={4}>
                  <Checkbox
                    isChecked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                  >
                    Remember Password
                  </Checkbox>
                </Box>
                <Flex justifyContent="center">
                  <Box p={4} flex={1}>
                    <Button type="submit" form="login-form" colorScheme="blue" width="100%">
                      Log In
                    </Button>
                  </Box>
                </Flex>
                <Box p={4} textAlign="center">
                  New Member?{' '}
                  <span style={{ color: 'blue', cursor: 'pointer' }} onClick={openRegister}>
                    Click Here
                  </span>
                </Box>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Registration />
    </>
  );
}

function Registration() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Registered and logged in');
    onClose();
  };

  Registration.open = () => {
    onOpen();
  };

  Registration.close = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          <form id="register-form" onSubmit={handleSubmit}>
            <FormControl>
              <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Create Account</Heading>
              </Stack>
              <Box p={4}>
                <FormLabel for="firstname">First Name</FormLabel>
                <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="lastname">Last Name</FormLabel>
                <Input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="email">Email address</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
              </Box>
              <Box p={4}>
                <FormLabel for="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
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
                    Sign In
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


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const NAV_ITEMS = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: "What's on",
            href: null,
            children: [
                {
                    label: 'All Movies',
                    subLabel: 'New and fast rising fan base',
                    href: '/all-movies',
                },
                {
                    label: 'Popular Movies',
                    subLabel: 'Trending and poupular among viewers',
                    href: '/popular-movies',
                },
            ],
        },
        {
            label: 'About Us',
            href: '/about-us',
        },
    ];

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex pos={"relative"} h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Flex display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation Menu"}
                    />
                </Flex>

                <Link to='/'>
                    <Text fontSize={"2xl"} fontWeight={"bold"} fontStyle={"italic"}>
                        CINERAMA
                    </Text>
                </Link>

                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    <DesktopNav navItems={NAV_ITEMS} />
                </Flex>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>

                        <App />

                    </Stack>
                </Flex>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={NAV_ITEMS} />
            </Collapse>
        </Box>
    )
}
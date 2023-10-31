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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    
} from '@chakra-ui/react';
import { 
  CloseIcon, 
  HamburgerIcon, 
  MoonIcon, 
  SunIcon,
  UnlockIcon
} from '@chakra-ui/icons';
import {
  mapStateToProps,
  mapDispatchToProps
} from './helper';import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import LoginModal from '../../screens/auth/LoginModal';
import RegisterModal from '../../screens/auth/RegisterModal';


function Header(props) {
    const {
      auth,
      logout
    } = props
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const { 
      isOpen: isLoginOpen, 
      onOpen: openLogin, 
      onClose: closeLogin 
    } = useDisclosure();
    
    const { 
      isOpen: isRegisterOpen, 
      onOpen: openRegister, 
      onClose: closeRegister 
    } = useDisclosure();

    const attemptLogout = () => {
        logout()
        window.location.reload()
    };
    
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

        <LoginModal 
          isOpen={isLoginOpen}
          // onOpen={openLogin}
          onClose={closeLogin}
        />

        <RegisterModal
          isOpen={isRegisterOpen}
          // onOpen={openRegister}
          onClose={closeRegister}
        />
        
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
                    INDEPENDENT CINEMA PAGE
                </Text>
            </Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav navItems={NAV_ITEMS} />
            </Flex>

            <Flex alignItems={'center'}>
                {
                  auth.loggedIn ? (
                    <Text mr={2}>
                      Hi, {auth.user && auth.user.userName}
                    </Text>
                  ): null 
                }

                <Stack direction={'row'} spacing={2}>
                  <Menu>
                    <MenuButton
                      as={Button}
                    >
                      <UnlockIcon />
                    </MenuButton>
                    <MenuList>
                      {
                        auth.loggedIn ? (
                          <MenuItem onClick={()=>attemptLogout()}>
                            Logout
                          </MenuItem>
                        ) : (
                          <>
                            <MenuItem onClick={openLogin}>
                              Login
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={openRegister}>
                              Register  
                            </MenuItem>
                          </>
                        )
                      }                      
                    </MenuList>
                  </Menu>

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

export default connect(mapStateToProps, mapDispatchToProps) (Header)
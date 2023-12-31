import React from 'react';

import {
    Flex,
    Text,
    Stack,
    Collapse,
    Icon,
    Link,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
ChevronDownIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';


export default function MobileNav(props) {
    const NAV_ITEMS = props.navItems

    const MobileNavItem = ({ label, children, href }) => {
        const { isOpen, onToggle } = useDisclosure();
      
        return (
            <Stack spacing={4} onClick={children && onToggle}>
                <Flex
                    py={2}
                    as={children ? "" : RouterLink}
                    to={href ?? '#'}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}>
                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}
                    >
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition={'all .25s ease-in-out'}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6}
                        />
                    )}
                </Flex>
            
                <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                    <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link as={RouterLink} key={child.label} py={2} to={child.href}>
                                {child.label}
                            </Link>
                        ))}
                    </Stack>
                </Collapse>
            </Stack>
        );
    };   
    
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4} mb={4}
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
}

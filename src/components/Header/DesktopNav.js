import React from 'react';
import {
    Box,
    Flex,
    Text,
    Stack,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue
} from '@chakra-ui/react';
import {
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';


export default function DesktopNav(props) {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    const NAV_ITEMS = props.navItems

    const SubNav = ({ label, href, subLabel }) => {
        return (
            <Link
                as={RouterLink}
                to={href}
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.900')}}
            >
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: 'gray.400' }}
                            fontWeight={500}>
                            {label}
                        </Text>
                        <Text fontSize={'sm'}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
                    </Flex>
                </Stack>
            </Link>
        );
    };
    
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                to={navItem.href ?? '#'}
                                as={RouterLink}
                                p={2}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
            
                        {navItem.children && (
                        <PopoverContent
                            border={0}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}
                            minW={'sm'}>
                            <Stack>
                            {navItem.children.map((child) => (
                                <SubNav key={child.label} {...child} />
                            ))}
                            </Stack>
                        </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
}

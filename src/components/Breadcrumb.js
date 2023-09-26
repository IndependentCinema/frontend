import React from 'react';
import {
    Breadcrumb as Breadcrumbb, 
    BreadcrumbItem, 
    BreadcrumbLink,
    useColorModeValue,
    Text
} from '@chakra-ui/react';
import { Link as routerLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';


export default function Breadcrumb({ activeCrumb, crumbs }) {
    return (
        <Breadcrumbb my={5} spacing='8px' separator={<ChevronRightIcon color={useColorModeValue('gray.700', 'gray.200')} />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={routerLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            
            {
                crumbs.map(crumb => {
                    return (
                        <BreadcrumbItem>
                            <BreadcrumbLink as={routerLink} to={crumb.path}>
                                {crumb.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>            
                    )
                })
            }

            <BreadcrumbItem color={useColorModeValue('gray.500', 'gray.400')}>
                <Text>{activeCrumb.title}</Text>
            </BreadcrumbItem>    
        </Breadcrumbb>
    )
}

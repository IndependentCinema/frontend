import React, { useState } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';

import MovieCard from '../../MovieCard/Index';


export default function SliderView({ data }) {
    const [slider, setSlider] = useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '-50px' });
    const sliderHeight = useBreakpointValue({ base: 380, md: 500 })

    // Settings for the slider
    const settings = {
        // dots: useBreakpointValue({ base: false, md: true }),
        dots: false,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: useBreakpointValue({ base: false, md: true }),
        slidesToShow: useBreakpointValue({ base: 2, sm: 3, lg: 4 }),
        slidesToScroll: 1,
    };

    return (
        <Box
            position={'relative'}
            width={'full'}
            height={sliderHeight + 100}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            
            
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {data.map((movieData, index) => (
                    <Box key={index} 
                        paddingRight={5}
                        paddingBottom={5} 
                        height={sliderHeight}
                    >
                        <MovieCard movie={movieData} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
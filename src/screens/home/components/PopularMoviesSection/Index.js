import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import MovieList from '../../../../components/MovieList/Index';
import SectionHeading from '../../../../components/SectionHeading';

export default function Index({ popularMovies }) {	
	return (
		<Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]} mt={"20"}>
				
			<SectionHeading title={"Popular Movies"} />

			<Box mt={"10"}>
				<MovieList 
					layout={"slider"}
					data={popularMovies && popularMovies.data} 
				/>
			</Box>

		</Container>
	)
}

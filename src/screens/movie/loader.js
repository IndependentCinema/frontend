import { PostMan } from '../../Helpers';

async function getCast(movieSlug) {
    // Process request
    const responseObject = await PostMan(`/movies/${movieSlug}`, 'get')
    // Handle response
    if (responseObject.status === 'success') {
        let movieData = responseObject.data
        console.log("movieData: ", movieData)
        return movieData
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

async function getMovie(movieSlug) {
    // Process request
    const responseObject = await PostMan(`/movies/${movieSlug}`, 'get')
    // Handle response
    if (responseObject.status === 'success') {
        let movieData = responseObject.data
        console.log("movieData: ", movieData)
        return movieData
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

export default async function loader({ params }) {
    console.log("params: ", params)
    const movie = await getMovie(params.movieSlug);
    console.log("movie: ", movie)
    return { movie };
}
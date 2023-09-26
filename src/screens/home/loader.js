import { PostMan } from '../../Helpers';

async function getPopularMovies() {
    // Process request
    const responseObject = await PostMan(`/movies/popular?page=1&limit=25`, 'get')
    // Handle response
    if (responseObject.status === 'success') {
        let categoryData = responseObject.data
        return {
            key: "popular",
            name: "Popular movies",
            slug: "popular-movies",
            data: categoryData
        }
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

export default async function loader({ params }) {
    // console.log("params: ", params)
    const popularMovies = await getPopularMovies();
    return { popularMovies };
}
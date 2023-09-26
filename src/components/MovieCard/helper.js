import { PostMan } from '../../Helpers';


export async function FetchMoviePoster(movie) {
    // console.log("movie:, ", movie)
    // Process request
    const responseObject = await PostMan(
        `/movies/get-photo?movieName=${movie.title}`, 'get'
    )
    // Handle response
    if (responseObject.status === 'success') {
        let responseData = responseObject.data
        console.log("responseData: ", responseData)
        return responseData
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

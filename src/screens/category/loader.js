import { PostMan } from '../../Helpers';

async function getCategory(categorySlug) {
    const CATEGORY_LIST = {
        "all-movies": {
            key: "all",
            name: "All movies",
            slug: "all-movies",
        },
        "popular-movies": {
            key: "popular",
            name: "Popular movies",
            slug: "popular-movies"
        }
    }
    let categoryObject = CATEGORY_LIST[categorySlug]
    if (categoryObject) {
        // Process request
        const urlPath = categoryObject.key == "all" ? "/movies" : `/movies/${categoryObject.key}`
        const responseObject = await PostMan(`${urlPath}?page=1&limit=25`, 'get')
        // Handle response
        if (responseObject.status === 'success') {
            let categoryData = responseObject.data
            categoryObject['data'] = categoryData
            return categoryObject
        } else {
            // Set New State
            console.log("Error: ", Error)
            console.log("responseObject: ", responseObject)
            return null
        }
    } else return null
}

export default async function loader({ params }) {
    const category = await getCategory(params.categorySlug);
    return { category };
}
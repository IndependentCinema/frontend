import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";


import HomeScreen from "./home/Index";
import AboutUsScreen from "./AboutUs";
import CategoryScreen from "./category/Index";
import MovieScreen from "./movie/Index";

import HomeLoader from "./home/loader";
import CategoryLoader from "./category/loader";
import MovieLoader from "./movie/loader";
import ActorLoader from "./actor/loader";

import PageActivityIndicator from '../components/loader/PageActivityIndicator';


export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeScreen />,
            loader: HomeLoader,
        },
        {
            path: "about-us",
            element: <AboutUsScreen />,
        },
        {
            path: "movie/:movieSlug",
            element: <MovieScreen />,
            loader: MovieLoader,
        },
        // {
        //     path: "actor/:actorSlug",
        //     element: <ActorScreen />,
        //     loader: ActorLoader,
        // },
        {
            path: ":categorySlug",
            element: <CategoryScreen />,
            loader: CategoryLoader,
        },
    ])

    return (
        <RouterProvider 
            router={router} 
            fallbackElement={<PageActivityIndicator />}
        />)
}

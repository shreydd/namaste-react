import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from './src/components/Header';
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

import Error from "./src/components/Error";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Login from "./src/components/Login";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ProfileClass from "./src/components/ProfileClassComp";
import Credits from "./src/components/Credits";
import Instamart from "./src/components/Instamart";

const About = lazy(() => import('../namaste-react-01/src/components/About'))
const Contact = lazy(() => import('../namaste-react-01/src/components/Contact'))

const AppLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h4>Loading...</h4>}>
                        <About/>
                    </Suspense>
                ),
                children:[
                    {
                        path:'profile',
                        element: <ProfileClass />
                    },
                    {
                        path: 'credits',
                        element: <Credits />
                    }
                ]
            },
            {
                path: '/contact',
                element: (
                    <Suspense fallback={<>Loading......</>}>
                        <Contact/>
                    </Suspense>
                )
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<>Loading......</>}>
                        <Instamart/>
                    </Suspense>
                )
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantDetails />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
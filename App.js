import React from "react";
import ReactDOM from "react-dom/client";

import Header from './src/components/Header';
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Login from "./src/components/Login";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
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
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom';

/**
            Header
                -Logo
                -Nav Items(right side)
                -Cart
            Body
                -Search Bar
                -Restaurant
                   -Restaurant Cards
                     -Image
                     -Name
                     -Rating
                     -Cusines
            Footer
                -Links
                -Copyright
*/

const AppLayout= ()=>{
    return ( 
        <>
            <Header/>
            {/**Sometimes we have to load several components according to our routes (it is a kind of conditional routing) */}
            {/**If we want to create nested routes we need to create a Outlet-- here we want our header and footer components te be always there*/}
            {/** Outlet ->It is like a placeholder component, It will change according to our route-> It will render according to our router config*/}
            <Outlet/>
            <Footer/>   
        </>
    )
}

//Router Configuration
const appRouter= createBrowserRouter([
    //this is the place where we define what will happen(what component we will load) if we hit '/path' url
    {
        //default path
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>, //in case or any error or random url
        //All these childrens will go into the outlet according to the route
        children :[
            //this sequence does not matter in this array of objects
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
                children:[
                    {
                        // '/' means from the root 
                        //  parentPath/{path} ==> localhost:1234/about/pofile
                        path: "profile", //dont put '/profile' here bcz react will read that as ==>localhost:1234/profile
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            //Dynamic Segments | Dynamic Routing
            {
                path:"/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
    
])


const root=ReactDOM.createRoot(document.getElementById("root"));

//RouterProvider is a component which helps us to provide this appRouter to our app

//now the root will render according the given router configuration
root.render(<RouterProvider router={appRouter} />);
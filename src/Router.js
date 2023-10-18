//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CocktailDetails from "./CocktailDetails";
import NavBar from "./NavBar";
import ShowCocktails from "./ShowCocktails";
import SearchBar from "./SearchBar";

const router = createBrowserRouter([

    {
        element: <App/>,
            children: [
                {
                    element: <NavBar />,
                    path: '/',
                    children: [
                        {
                            element: <ShowCocktails />,
                            path: 'list',
                            children: [
                                {
                                    element: <CocktailDetails />,
                                    path: 'details'
                                }
                            ]
                        }, 
                        {
                            element: <SearchBar />,
                            path: 'search',
                            children: [
                                {
                                    element: <CocktailDetails />,
                                    path: 'details'   
                                }
                            ]
                        }
                    ]
                },
                
                
                    ]

                }
               
            ]


);
export default router


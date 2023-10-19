//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CocktailDetails from "./CocktailDetails";
import NavBar from "./NavBar";
import ShowCocktails from "./ShowCocktails";
import SearchBar from "./SearchBar";
import Spirits from "./Spirits"
import RandomCocktail from "./Random";

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
                        },
                        {
                            element: <Spirits />,
                            path: 'spirits',
                        },
                        {
                            element: <RandomCocktail />,
                            path: 'random',
                            children: [
                                {
                                    element: <CocktailDetails/>,
                                    path: 'details'
                                }
                            ]
                        }, 
                        {
                            path: '*'
                        }
                    ]
                },
                
                    ]

                }
               
            ]


);
export default router


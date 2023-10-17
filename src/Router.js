//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CocktailDetails from "./CocktailDetails";

const router = createBrowserRouter([

    {
        element: <App/>,
        path: '/',
            children: [
                {
                    element: <CocktailDetails></CocktailDetails>,
                    path: 'details',
                     
                        }
                    ]

                }
               
            ]


);
export default router


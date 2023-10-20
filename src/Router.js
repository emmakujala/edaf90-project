import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CocktailDetails from "./CocktailDetails";
import NavBar from "./NavBar";
import ShowCocktails from "./ShowCocktails";
import SearchBar from "./SearchBar";
import Spirits from "./Spirits"
import SpiritButtons from "./SpiritButtons";
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
                            element: <SpiritButtons />,
                            path: 'spirits',
                            children: [
                                {
                                    element: <Spirits></Spirits>,
                                    path: 'category',
                                    children: [
                                        {
                                        element: <CocktailDetails />,
                                        path: 'details'   
                                    }
                                    ]
                                }
                            ]
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
                            path: '*',
                            element: <h3 style = {{padding: '24px'}}>Pick a menu option!</h3>
                        }
                    ]
                },
                
                    ]

                }
               
            ]


);
export default router


import { useEffect, useState } from "react";
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import { useCocktailContext } from './CocktailProvider';
import CocktailDetails from "./CocktailDetails";

export default function ShowCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
    const { selectedCocktail, setSelectedCocktail } = useCocktailContext();
    const navigate = useNavigate();

    useEffect(() => {

        async function getCocktails() {
            try {
                let allCocktails = [];

                for (let letter of alphabet) {
                    const response = await fetch(url + letter);
                    const result = await response.json();

                    if (result.drinks) {
                        allCocktails = [...allCocktails, ...result.drinks]
                    }
                }
                
                setCocktails(allCocktails);
                
                
                 
            } catch (error) {
                console.error(error);
            }
            
        }
        getCocktails();
       
    }, [])

    
    const show = ((value) => {
        setSelectedCocktail(value);
        console.log(value);
        navigate('/list/details');


    })

    
     

    return (

        <div>
          
            <select value={selectedCocktail} onChange={(e) => show(e.target.value)} className="btn btn-info dropdown-toggle" position="absolute">
            <option value=''>Choose a drink</option>
            {cocktails.map((cocktail, index) => (
                <option value={cocktail.strDrink} key={index}>{cocktail.strDrink}</option>  
            )
            
            )}
            </select>
            <Routes>
            <Route path="details" element={<CocktailDetails />} />
            </Routes>
            <Outlet />
        </div>
    )


}
import { Button } from "react-bootstrap";
import { useCocktailContext } from "./CocktailProvider"
import { useEffect } from "react";
import { Outlet,useNavigate } from "react-router-dom";

export default function RandomCocktail() {

    const {dispatch} = useCocktailContext();
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const navigate = useNavigate();


    async function fetchCocktailDetails() {
        try {
          const response = await fetch(url);
          const data = await response.json();
          dispatch({type: 'SET_SELECTED_COCKTAIL', payload: data.drinks[0].strDrink})
          navigate('/random/details')

          
        } catch (error) {
          console.error(error);
           
        }
      }

    useEffect (() => {
        fetchCocktailDetails();
    }, [])

    const handleClick = (() => {
        fetchCocktailDetails();

    })



    return (

        <div>
        <Button className="btn btn-warning text-white" onClick={handleClick}>Randomise new cocktail</Button>
        <Outlet />
        </div>

    )

}


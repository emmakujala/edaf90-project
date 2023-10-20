import { Button } from "react-bootstrap";
import { useCocktailContext } from "./CocktailProvider";
import { useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RandomCocktail() {
  const { dispatch } = useCocktailContext();
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const navigate = useNavigate();

  const fetchCocktailDetails = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method: 'POST'
      });
      const data = await response.json();
      dispatch({ type: 'SET_SELECTED_COCKTAIL', payload: data.drinks[0].strDrink });
      navigate('/random/details');
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    fetchCocktailDetails();
  }, [fetchCocktailDetails]);

  const handleClick = () => {
    fetchCocktailDetails();
  };

  return (
    <div>
      <Button className="btn btn-warning text-white" onClick={handleClick}>Randomize new cocktail</Button>
      <Outlet />
    </div>
  );
}

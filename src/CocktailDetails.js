import { useState } from "react";
import { useEffect } from "react";
import { useCocktailContext } from './CocktailProvider';

export default function CocktailDetails() {


  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const { state } = useCocktailContext();


  useEffect(() => {

    if (!state.selectedCocktail) {
      return;
    }

    async function fetchCocktailDetails() {
      try {
        const response = await fetch(url + state.selectedCocktail);
        const data = await response.json();
        setCocktailDetails(data.drinks[0]);
      } catch (error) {
        console.error(error);

      }
    }

    fetchCocktailDetails();

  }, [state]);

  if (!cocktailDetails) {
    return <span>No data available for the selected cocktail.</span>;
  }


  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktailDetails[`strIngredient${i}`];
    const measurement = cocktailDetails[`strMeasure${i}`];
    if (ingredient && measurement) {
      ingredients.push({ ingredient, measurement });
    }
  }

  return (

    <div className="border border-warning rounded" style={{ padding: '24px', margin: '24px auto', position: 'relative', maxWidth: '500px' }}>
      <h2>{cocktailDetails.strDrink}</h2>
      <img src={cocktailDetails.strDrinkThumb} className="rounded" alt={cocktailDetails.strDrink} style={{ margin: '14px', maxWidth: '200px' }} />
      <p><b>Category:</b> {cocktailDetails.strCategory}</p>
      <p><b>Glass Type:</b> {cocktailDetails.strGlass}</p>
      <p><b>Alcoholic:</b> {cocktailDetails.strAlcoholic}</p>
      <h3>Ingredients:</h3>
      <div className='list-group'>
        {ingredients.map((item, index) => (
          <a key={index}>
            {item.ingredient}: {item.measurement}
          </a>
        ))}
      </div>
      <h3 style={{ marginTop: '14px' }} >Instructions:</h3>
      <p>{cocktailDetails.strInstructions}</p>

    </div>
  );
}




//import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCocktailContext } from './CocktailProvider';

export default function CocktailDetails() {
    
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [cocktailDetails, setCocktailDetails] = useState(null); 
    const { selectedCocktail } = useCocktailContext();


    //console.log(selectedCocktail.strDrink);


    useEffect(() => {

        if (!selectedCocktail) {
            return;
        }
         
          async function fetchCocktailDetails() {
            try {
              const response = await fetch(url + selectedCocktail);
              const data = await response.json();
              setCocktailDetails(data.drinks[0]);  
              
            } catch (error) {
              console.error(error);
               
            }
          }
    
          fetchCocktailDetails();  
         
    }, [selectedCocktail]);  
    
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
        <div className="container py-4">
          <h2>{cocktailDetails.strDrink}</h2>
          <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} style={{ maxWidth: '200px' }} />
          <p>Category: {cocktailDetails.strCategory}</p>
          <p>Glass Type: {cocktailDetails.strGlass}</p>
          <p>Alcoholic: {cocktailDetails.strAlcoholic}</p>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.ingredient}: {item.measurement}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{cocktailDetails.strInstructions}</p>
        </div>
      );
}
    
     


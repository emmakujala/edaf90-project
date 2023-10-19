  import React, { createContext, useContext, useReducer } from 'react';

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

    const cocktailReducer = (state, action) => {
      switch (action.type) {
        case 'SET_SELECTED_COCKTAIL':
          return { ...state, selectedCocktail: action.payload };
        default:
          return state;
      }useState
    };

    const CocktailContext = createContext();

    async function initCocktails() {
        if(window.localStorage.getItem('cocktailNames') === null) {
          try {
            let allCocktails = [];
            for (let letter of alphabet) {
                const response = await fetch(url + letter);
                const result = await response.json();
                console.log(result);
                if (result.drinks) {
                    allCocktails = [...allCocktails, ...result.drinks]
                }
            }
            const cocktailNames = allCocktails.map((cocktail) => {
              return cocktail.strDrink;
            });
            window.localStorage.setItem('cocktailNames', JSON.stringify(cocktailNames));

          } catch (error) {
              console.error(error);
          }
        }
    }

    function parsedCocktailList() {
      initCocktails();
      return JSON.parse(window.localStorage.getItem('cocktailNames'));
    }

    export const useCocktailContext = () => {
      return useContext(CocktailContext);
    };

    const initialState = {
      selectedCocktail: '',
      cocktailNames: parsedCocktailList()
    };

    export const CocktailProvider = ({ children }) => {
      const [state, dispatch ] = useReducer(cocktailReducer, initialState);

      return (
        <CocktailContext.Provider value={{ state, dispatch }}>
          {children}
        </CocktailContext.Provider>
      );
    };

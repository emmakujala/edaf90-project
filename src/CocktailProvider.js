import React, { createContext, useState, useContext, useReducer } from 'react';

const cocktailReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_COCKTAIL':
      return { ...state, selectedCocktail: action.payload };
    default:
      return state;
  }
};


const CocktailContext = createContext();

export const useCocktailContext = () => {
  return useContext(CocktailContext);
};

const initialState = {
  selectedCocktail: '',
};

export const CocktailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cocktailReducer, initialState);

  return (
    <CocktailContext.Provider value={{ state, dispatch }}>
      {children}
    </CocktailContext.Provider>
  );
};

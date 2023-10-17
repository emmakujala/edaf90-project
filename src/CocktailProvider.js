import React, { createContext, useState, useContext } from 'react';

const CocktailContext = createContext();

export const useCocktailContext = () => {
  return useContext(CocktailContext);
};

export const CocktailProvider = ({ children }) => {
  const [selectedCocktail, setSelectedCocktail] = useState('');

  return (
    <CocktailContext.Provider value={{ selectedCocktail, setSelectedCocktail }}>
      {children}
    </CocktailContext.Provider>
  );
};

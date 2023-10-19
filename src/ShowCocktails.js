import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import { useCocktailContext } from './CocktailProvider';
import CocktailDetails from "./CocktailDetails";

export default function ShowCocktails() {
    const { state, dispatch } = useCocktailContext();
    const navigate = useNavigate();

    
    const show = ((newCocktail) => {
       dispatch({ type: 'SET_SELECTED_COCKTAIL', payload: newCocktail })
        navigate('/list/details');

    })

    return (

        <div>
          
            <select value={state.selectedCocktail} onChange={(e) => show(e.target.value)} className="btn btn-info dropdown-toggle" position="absolute">
            <option value=''>Choose a drink</option>
            {state.cocktailNames.map((cocktail, index) => (
                <option value={cocktail} key={index}>{cocktail}</option>  
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
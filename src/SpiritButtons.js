import Button from "react-bootstrap/Button"
import { useCocktailContext } from "./CocktailProvider"
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import Spirits from "./Spirits";

export default function SpiritButtons() {
    const {state, dispatch} = useCocktailContext();
    const navigate = useNavigate();

    function handleClick(spirit) {
       dispatch({type: 'SET_SELECTED_SPIRIT', payload: spirit})
        navigate('/spirits/category')
        
    }
    return (
        <div>
        <p>Find recipie based on a specific spirit:</p>

        <Button onClick={() => handleClick("Gin")}>Gin</Button> {'    '}
        <Button onClick={() =>handleClick("Rum")}>Rum</Button> {'    '}
        <Button onClick={() => handleClick("Tequila")}>Tequila</Button> {'    '}
        <Button onClick={() => handleClick("Vodka")}>Vodka</Button> 

        <Routes>
        <Route path='category' element={<Spirits />} />
        </Routes>
        <Outlet></Outlet>
        </div>
    )
    
}
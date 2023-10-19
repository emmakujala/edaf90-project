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
        <h1>Get inspired!</h1>
        <p style={{margin: '14px'}}>Find cocktails based on spirit</p>

        <Button style={{margin: '14px'}} className="btn btn-warning text-white" onClick={() => handleClick("Gin")}>Gin</Button> {'    '}
        <Button style={{margin: '14px'}} className="btn btn-warning text-white" onClick={() =>handleClick("Rum")}>Rum</Button> {'    '}
        <Button style={{margin: '14px'}} className="btn btn-warning text-white" onClick={() => handleClick("Tequila")}>Tequila</Button> {'    '}
        <Button style={{margin: '14px'}} className="btn btn-warning text-white" onClick={() => handleClick("Vodka")}>Vodka</Button> 

        <Routes>
        <Route path='category' element={<Spirits />} />
        </Routes>
        <Outlet></Outlet>
        </div>
    )
    
}
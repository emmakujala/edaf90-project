import Button from "react-bootstrap/Button"
import { useCocktailContext } from "./CocktailProvider"
import { Outlet, useNavigate } from "react-router-dom";

export default function SpiritButtons() {
    const { dispatch } = useCocktailContext();
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
        <Outlet></Outlet>
        </div>
    )
    
}
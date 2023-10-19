import Button from "react-bootstrap/Button"
import { useCocktailContext } from "./CocktailProvider"

export default function Buttons() {
    const {state, dispatch} = useCocktailContext();

    function handleClick(spirit) {
       dispatch({type: 'SET_SELECTED_SPIRIT', payload: spirit})
        
         
    }
    return (
        <div>
        <p>Find recipie based on a specific spirit:</p>
        <Button onClick={handleClick("Vodka")}>Vodka</Button> {'    '}
        <Button onClick={handleClick("Gin")}>Gin</Button> {'    '}
        <Button onClick={handleClick("Rum")}>Rum</Button> {'    '}
        <Button onClick={handleClick("Tequila")}>Tequila</Button>
        </div>
    )
    
}
import Button from "react-bootstrap/Button"

export default function Buttons() {

    function handleClick(spirit) {
        
        const = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
        return (
            
        )
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
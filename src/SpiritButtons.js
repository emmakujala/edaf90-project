import Button from "react-bootstrap/Button"

export default function Buttons() {
    return (
        <div>
        <p>Find recipie based on a specific spirit:</p>
        <Button onClick={handleClick("Vodka")}>Vodka</Button> {'    '}
        <Button>Gin</Button> {'    '}
        <Button>Rum</Button> {'    '}
        <Button>Tequila</Button>
        </div>
    )
}
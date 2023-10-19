import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

export default function Spirits() {

    return (
        <div>
        <Button className="btn btn-warning text-white">Vodka</Button> {'  '}
        <Button className="btn btn-warning text-white">Gin</Button> {'  '}
        <Button className="btn btn-warning text-white">Rum</Button> {'  '}
        <Button className="btn btn-warning text-white">Tequila</Button>
        </div>
    )
}